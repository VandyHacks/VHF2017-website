<template>
    <div class="sponsor-images">
        <div class="sponsor-row tier-1">
            <a href="https://www.microstrategy.com/us">
                <img src="~assets/img/sponsors/microstrategy.png" alt="MicroStrategy" />
            </a>
        </div>
        <div class="sponsor-row tier-2">
            <a href="https://www.bnymellon.com/">
                <img src="~assets/img/sponsors/bnymellon.png" alt="BNY Mellon" />
            </a>
            <a href="https://www.centene.com/">
                <img src="~assets/img/sponsors/centenecorp.png" alt="Centene Corporation" />
            </a>
        </div>
    </div>
</template>

<style lang="scss">
.sponsor-row {
    text-align: center;

    img {
        padding: 15px;
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
            max-width: 300px;
        }
    }
}
</style>