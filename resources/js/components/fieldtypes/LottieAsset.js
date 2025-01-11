export default {
    data() {
        return {
            isLottieValid: true,
        }
    },

    computed: {
        isLottieAnimation() {
            if (!this.asset.extension) return false
            if (!this.isLottieValid) return false

            return this.asset.extension === 'lottie' || this.asset.extension === 'json'
        },

        shouldShowLottiePreview() {
            return this.isLottieAnimation && this.isLottieValid
        },
    },

    methods: {
        handleLottieError() {
            this.isLottieValid = false
        },
    },
}
