<template>
    <a id="mlh-trust-badge" href="https://mlh.io/seasons/na-2018/events?utm_source=na-2018&utm_medium=TrustBadge&utm_campaign=na-2018&utm_content=white" rel="noopener" target="_blank">
        <img src="~assets/img/mlh-white.svg" alt="Major League Hacking 2017 Hackathon Season" style="width:100%">
    </a>
</template>

<style lang="scss">
#mlh-trust-badge {
    display: block;
    min-width: 50px;
    max-width: 50px;
    position: absolute;
    right: 15px;
    top: 0;
    width: 10%;
    z-index: 5;

    @media (min-width: 960px) {
        max-width: 75px;
        right: 35px;
    }

    @media (min-width: 1200px) {
        max-width: 96px;
        right: 50px;
    }
}
</style>
