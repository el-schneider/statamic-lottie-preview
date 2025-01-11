<template>
    <div class="">
        <img
            v-if="asset.is_image"
            :src="asset.thumbnail"
            class="asset-thumbnail max-h-8 max-w-full mx-auto rounded"
            loading="lazy"
            :class="{ 'w-8 h-8 object-cover': square }"
        />
        <img
            v-else-if="asset.is_svg"
            :src="asset.url"
            class="asset-thumbnail h-8 max-w-full mx-auto rounded"
            loading="lazy"
        />
        <lottie-preview
            v-else-if="isLottieAnimation && isLottieValid"
            :src="asset.url"
            @error="handleLottieError"
            class="asset-thumbnail w-8 h-8"
        />
        <file-icon v-else :extension="asset.extension" class="p-px asset-thumbnail rounded w-8 h-8" />
    </div>
</template>

<script>
import LottieAsset from './LottieAsset'
import LottiePreview from './LottiePreview.vue'

export default {
    mixins: [LottieAsset],
    components: {
        LottiePreview,
    },
    props: {
        asset: Object,
        square: {
            default: false,
            type: Boolean,
        },
    },
    computed: {
        showSvg() {
            return this.asset.extension === 'svg'
        },
    },
}
</script>
