<template>
    <div class="sponsor-images">
        <div class="sponsor-row tier-1">
            <a href="https://www.microstrategy.com/us" target="_blank" rel="noopener">
                <img src="~assets/img/sponsors/microstrategy.svg" alt="MicroStrategy" />
            </a>
        </div>
        <div class="sponsor-row tier-2">
            <a href="https://www.bnymellon.com/" target="_blank" rel="noopener">
                <img src="~assets/img/sponsors/bnymellon.svg" alt="BNY Mellon" />
            </a>
            <a href="https://www.centene.com/" target="_blank" rel="noopener">
                <img src="~assets/img/sponsors/centene.svg" alt="Centene Corporation" />
            </a>
        </div>
        <div class="sponsor-row tier-3">
            <a href="https://www.redventures.com/" target="_blank" rel="noopener">
                <img src="~assets/img/sponsors/rv.svg" alt="RED Ventures" />
            </a>
            <a href="https://www.chick-fil-a.com/" target="_blank" rel="noopener">
                <img src="~assets/img/sponsors/chickfila.svg" alt="Chick-fil-A" />
            </a>
            <a href="https://campus.capitalone.com/" target="_blank" rel="noopener">
                <img src="~assets/img/sponsors/capital-one.svg" alt="Capital One" />
            </a>
        </div>
        <div class="sponsor-row tier-3">
            <a href="https://www.twilio.com/" target="_blank" rel="noopener">
                <img src="~assets/img/sponsors/twilio.svg" alt="Twilio" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener">
                <img src="~assets/img/sponsors/fb-family.svg" alt="Facebook" />
            </a>
            <a href="https://www.stickermule.com/uses/laptop-stickers" target="_blank" rel="noopener">
                <img src="~assets/img/sponsors/stickermule.svg" alt="StickerMule" />
            </a>
        </div>
        <div class="sponsor-row tier-3">
            <a href="http://www.forcexinc.com/" target="_blank" rel="noopener">
                <img src="~assets/img/sponsors/l3-forcex.svg" alt="L3 ForceX" />
            </a>
            <a href="http://www.vgt.net/" target="_blank" rel="noopener">
                <img src="~assets/img/sponsors/vgt.svg" alt="VGT" />
            </a>
            <img src="~assets/img/sponsors/morecoming.svg" alt="More coming..." />
        </div>
    </div>
</template>

<style lang="scss">
@import '~assets/scss/breakpoints.scss';

.sponsor-row {
    text-align: center;

    img {
        padding: 10px;
        vertical-align: middle;

        @media (min-width: $break-m) {
            padding: 15px;
        }

        @media (min-width: $break-l) {
            padding: 20px;
        }
    }

    &.tier-1 {
        img {
            width: 100%;
            max-width: 600px;
        }
    }

    &.tier-2 {
        img {
            width: 50%;
            max-width: 360px;
        }
    }

    &.tier-3 {
        img {
            width: 33.333%;
            height: auto;
        }
    }
}
</style>