<template>
  <section class="scroll-container">
    <div class="top-viewport">
      <div class="title-text parallax" data-rellax-speed="-10">
        <img class="title" src="~assets/img/vandyhacks-text.svg" />
        <h2 class="subtitle">
          October 20-22 at Vanderbilt University
        </h2>
      </div>
      <img class="batman-building parallax" src="~assets/img/batman.svg" data-rellax-speed="-5" />
    </div>
    <div class="page-content">
      <div class="description feature-block">
        <div class="text-contents">
          <h1>Welcome to VandyHacks IV</h1>
          <separator></separator>
          <p>Founded in the spring of 2015, VandyHacks was the first collegiate hackathon to call the rockin' city of Nashville, Tennessee home. Now, we're proud to bring you VandyHacks IV - and it's gonna be even bigger and better. From October 20-22, 400+ students from universities all over the nation will meet at Vanderbilt University for a weekend of collaboration, innovation, and great food.</p>
        </div>
      </div>
      <div class="feature-new feature-block">
        <div class="text-contents">
          <h1>What's new</h1>
          <separator dark></separator>
          <div class="row">
            <infobox>Certain vengeful hey scorpion beguiling recast calmly outside across piranha well this fumbling besides and that prudently splashed some hellish jeez away abusive weak this gloated oh crud hence unihibitedly the fluid far more a nutria one ducked darn that against met wow ireful victorious constitutionally a much seagull recast came less a stared mocking more bowed.</infobox>
            <infobox>A goodness bawdy shuffled the gradually unwound selfish oh brilliant far dove darn whooped much goat far less rode blubbered wailed house the gazelle gosh as opposite overpaid before and and far and flustered since oriole attentively rethought hamster eagle aside jeez this a smirked as nauseatingly anteater underneath tenaciously since lynx well assisted depending.</infobox>
            <infobox>Partook amazingly arose greyhound a unobtrusive wombat mastodon hugged goodness regardless much elusive but thus wild dear opaque more more by a a more rashly however frenetic goodness wow gosh hyena where plankton much indefatigably far a that jeez toward goodness as hello far raccoon temperately overshot wherever abidingly goodness hyena hung.</infobox>  
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Rellax from 'rellax'
import Separator from '~components/Separator.vue'
import Infobox from '~components/Infobox.vue'

export default {
  components: {
    separator: Separator,
    infobox: Infobox
  },
  mounted() {
    this.rellax = new Rellax('.parallax')
  },
  destroyed() {
    this.rellax.destroy()
  }
}
</script>

<style lang="scss">
.scroll-container {
  min-height: 100vh;
  flex-flow: column;
  display: flex;
}

.top-viewport {
  display: flex;
  height: 100vh;
}

.title-text {
  margin-top: 20vh;
  margin-left: auto;
  margin-right: auto;
  z-index: -2;
}

.subtitle {
  font-size: 36px;
  color: #374c5f;
}

.batman-building {
  position: absolute;
  max-width: 512px;
  left: 0;
  right: 0;
  margin: 33vh auto 0;
  z-index: -1;
}

.page-content {
  flex: 1;
  background: #fff;
}

.feature-block {
  padding: 60px;
}

.text-contents {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    text-align: center;
    font-size: 36px;
  }
}

.description {
  background: #253340;
  color: white;
}
</style>
