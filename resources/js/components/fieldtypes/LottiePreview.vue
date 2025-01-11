<template>
    <canvas ref="lottieCanvas" class="w-full h-full"></canvas>
</template>

<script>
import { DotLottie } from '@lottiefiles/dotlottie-web'

export default {
    name: 'LottiePreview',

    props: {
        src: {
            type: String,
            required: true,
        },
        autoplay: {
            type: Boolean,
            default: true,
        },
        loop: {
            type: Boolean,
            default: true,
        },
    },

    data() {
        return {
            lottieInstance: null,
            isValidLottie: false,
        }
    },

    mounted() {
        this.initLottieAnimation()
    },

    beforeDestroy() {
        if (this.lottieInstance) {
            this.lottieInstance.destroy()
            this.lottieInstance = null
        }
    },

    methods: {
        initLottieAnimation() {
            this.lottieInstance = new DotLottie({
                autoplay: this.autoplay,
                loop: this.loop,
                canvas: this.$refs.lottieCanvas,
                src: this.src,
            })

            // Listen for load error event
            this.lottieInstance.addEventListener('loadError', (event) => {
                console.warn('Lottie load error:', event.error)
                this.isValidLottie = false
                this.$emit('error', event.error)

                if (this.lottieInstance) {
                    this.lottieInstance.destroy()
                    this.lottieInstance = null
                }
            })

            // Listen for successful load
            this.lottieInstance.addEventListener('load', () => {
                this.isValidLottie = true
                this.$emit('loaded')
            })

            this.lottieInstance.load()
        },
    },
}
</script>
