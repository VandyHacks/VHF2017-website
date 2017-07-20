<template>
  <section class="parallax">
    <mlhbadge></mlhbadge>
    <div class="parallax-group">
      <div class="parallax-layer deepest">
        <img class="skyline" alt="Nashville Skyline" src="~assets/img/skyline.svg" />
      </div>
      <div class="parallax-layer deep">
        <img class="logo" alt="VandyHacks IV" src="~assets/img/vandyhacks-text.svg" />
      </div>
      <div class="parallax-layer back">
        <img class="batman-building" alt="AT&T Building" src="~assets/img/batman.svg" />
      </div>
    </div>
    <div class="parallax-layer base page-content">
      <div class="description feature-block">
        <div class="text-contents">
          <h1>Welcome to VandyHacks IV</h1>
          <separator white/>
          <p>Founded in the spring of 2015, VandyHacks was the first collegiate hackathon to call the rockin' city of Nashville, Tennessee home. Now, we're proud to bring you VandyHacks IV - and it's gonna be even bigger and better. From October 20-22, 400+ students from universities all over the nation will meet at Vanderbilt University for a weekend of collaboration, innovation, and great food.</p>
        </div>
      </div>
      <div class="feature-new feature-block">
        <div class="text-contents">
          <h1>What's new</h1>
          <separator/>
          <div class="row">
            <infobox>Certain vengeful hey scorpion beguiling recast calmly outside across piranha well this fumbling besides and that prudently splashed some hellish jeez away abusive weak this gloated oh crud hence unihibitedly the fluid far more a nutria one ducked darn that against met wow ireful victorious constitutionally a much seagull recast came less a stared mocking more bowed.</infobox>
            <infobox>A goodness bawdy shuffled the gradually unwound selfish oh brilliant far dove darn whooped much goat far less rode blubbered wailed house the gazelle gosh as opposite overpaid before and and far and flustered since oriole attentively rethought hamster eagle aside jeez this a smirked as nauseatingly anteater underneath tenaciously since lynx well assisted depending.</infobox>
            <infobox>Partook amazingly arose greyhound a unobtrusive wombat mastodon hugged goodness regardless much elusive but thus wild dear opaque more more by a a more rashly however frenetic goodness wow gosh hyena where plankton much indefatigably far a that jeez toward goodness as hello far raccoon temperately overshot wherever abidingly goodness hyena hung.</infobox>
          </div>
        </div>
      </div>
      <div class="schedule feature-block">
        <div class="text-contents">
          <h1>Schedule</h1>
          <separator white/>
          <p>
            As spoiled dolphin jeez neglectfully after less more and less filled antagonistically far and examined while far quail darn far saucily alert circa rabbit or noticeable according wow wherever cuffed alas but creepy congenially the one alertly dwelled scorpion fussy mawkish sordid much far circa next one darn towards more or irrespective antelope simply alas as the gorilla hotly forward along up gibbered where more excepting across boundless massive jeez frowned some tangible mammoth far between far that. Sapien orci elementum commodo etiam eget phasellus mi semper ultrices, ultricies hendrerit non duis aenean morbi aliquet condimentum ipsum ut, himenaeos maecenas nunc et imperdiet conubia ut euismod nec morbi donec vulputate odio molestie tempor consectetur justo mauris velit et, class risus magna laoreet maecenas ut sed accumsan per rutrum, pellentesque iaculis mi pharetra interdum accumsan tellus porttitor lectus amet quisque eros volutpat diam. Curabitur luctus porta himenaeos dictum a amet magna leo himenaeos erat, platea nam imperdiet nisl etiam eros lorem dictumst semper molestie sem tempus turpis augue erat tellus massa dui arcu, tortor ornare ligula augue lorem litora fermentum neque, cras curae a habitant gravida fermentum ligula mattis aenean pulvinar cubilia est tellus risus integer curabitur cubilia nostra interdum, habitant platea nam iaculis sollicitudin aliquet convallis tellus habitant, eu purus ut velit nam id lacinia accumsan porta. Sapien orci elementum commodo etiam eget phasellus mi semper ultrices, ultricies hendrerit non duis aenean morbi aliquet condimentum ipsum ut, himenaeos maecenas nunc et imperdiet conubia ut euismod nec morbi donec vulputate odio molestie tempor consectetur justo mauris velit et, class risus magna laoreet maecenas ut sed accumsan per rutrum, pellentesque iaculis mi pharetra interdum accumsan tellus porttitor lectus amet quisque eros volutpat diam.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MlhBadge from '~components/MlhBadge.vue'
import Separator from '~components/Separator.vue'
import Infobox from '~components/Infobox.vue'

export default {
  components: {
    mlhbadge: MlhBadge,
    separator: Separator,
    infobox: Infobox
  }
}
</script>

<style lang="scss">
@import '~assets/scss/parallax.scss';

$break-s: 360px;
$break-sm: 432px;
$break-m: 576px;
$break-l: 768px;
$break-xxl: 1600px;








/*
There are offset issues on Chrome desktop, most noticeable at extremely low widths
Do not attempt to try to fix them, the offsets are fine on mobile where they matter
*/

.logo {
  position: absolute;
  left: 0;
  right: 0;
  margin: 17.5vh auto 0;

  /* Responsiveness */
  width: 290px;

  @media (min-width: $break-s) {
    width: 320px;
  }

  @media (min-width: $break-sm) {
    width: 390px;
  }

  @media (min-width: $break-m) {
    width: 495px;
  }

  @media (min-width: $break-l) {
    width: 635px;
  }
}

.batman-building {
  position: absolute;
  left: 0;
  right: 0;
  margin: 33vh auto 0;
  max-width: 256px;

  @media (min-width: $break-sm) {
    max-width: 360px;
  }

  @media (min-width: $break-m) {
    max-width: 400px;
  }

  @media (min-width: $break-xxl) {
    max-width: 512px;
  }
}

$skyline-color: #daeaf2;

.skyline {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto 0;
  overflow: hidden;
  border-bottom: 50px solid $skyline-color;
  /* Disguise subpixel rounding issues */
  box-shadow: inset 0px -2.5px $skyline-color;

  @media (min-width: $break-sm) {
    border-bottom: 30px solid $skyline-color;
  }

  @media (min-width: $break-m) {
    border-bottom: 20px solid $skyline-color;
  }

  @media (min-width: $break-l) {
    border-bottom: none;
    box-shadow: none;
  }
}

.page-content {
  top: 100%;
}

.feature-block {
  padding: 36px;
  background: #fff;

  @media (min-width: $break-l) {
    padding: 60px;
  }
}

.text-contents {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    text-align: center;
    @media (min-width: $break-l) {
      font-size: 36px;
    }
  }
}

.description {
  background: #253340;
  color: white;
}

.schedule {
  background: #626a73;
  color: white;
}
</style>
