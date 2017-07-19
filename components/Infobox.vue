<template>
    <div class="col-md-4">
        <div class="infobox">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.infobox {
    margin-top: 10px;
    background: lighten(#cbd1ce, 7);
    padding: 25px;
}
</style>
