<template>
  <section class="parallax">
    <div class="parallax-group">
      <div class="parallax-layer base">
        <mlhbadge></mlhbadge>
      </div>
      <div class="parallax-layer deepest">
        <img class="skyline" alt="Nashville Skyline" src="~assets/img/skyline.svg" />
      </div>
      <div class="parallax-layer deep">
        <div class="logo">
          <img alt="VandyHacks IV" src="~assets/img/vandyhacks-text.svg" />
          <div class="actions">
            <a ontouchstart="" class="apply-btn" href="/apply">Apply</a>
          </div>
        </div>
      </div>
      <div class="parallax-layer back">
        <batmanbuilding/>
      </div>
    </div>
    <div class="parallax-layer base page-content">
      <div class="description feature-block">
        <div class="text-contents">
          <h1>Welcome to VandyHacks IV</h1>
          <separator white/>
          <p>Founded in the spring of 2015, VandyHacks was the first collegiate hackathon to call Nashville, Tennessee home. Now, we're proud to bring you VandyHacks IV! From October 20-22, 400+ students from colleges and universities across the nation will gather at Vanderbilt University’s Engineering and Science Building for a weekend of collaboration, innovation, and entrepreneurship. For 36 hours, participants will work together to bring their ideas to life - and have lots of fun doing it! VandyHacks welcomes beginners, and we encourage all students to apply, regardless of major or background.</p>
          &nbsp;
          <p>
            <b>We are currently working out the details for the event. More information will be available in a couple of weeks.</b>
          </p>
        </div>
      </div>
      <googlemap/>
      <div class="faq feature-block">
        <div class="text-contents">
          <h1>FAQ</h1>
          <separator white/>
          <div class="row">
            <div class="col-md-6 faq-col">
              <h3 class="faq-header">General</h3>
              <faqitem title="I have no idea how to code, so why should I attend?">
                Even more reason for you to come! We will be hosting beginners' workshops for you to get started, and our mentors can always help you out along the way. We greatly encourage new hackers to attend, and no prior experience is necessary!
              </faqitem>
              <faqitem title="What if I've never been to a hackathon?">
                Not to worry! A few weeks before the event, you’ll receive an email with a link to our hacker guide, which will contain all the information you need to make the most out of your weekend. During the event, the VandyHacks Team will be around to help answer any questions. As always, feel free to email us at
                <a href="mailto:info@vandyhacks.org">info@vandyhacks.org</a> with any questions you may have.
              </faqitem>
              <h3 class="faq-header">Applying</h3>
              <faqitem title="Who can apply?">
                Anyone who is 18 years or older (we will be checking ID) and is currently enrolled in college or university with a valid student ID. International students are invited to apply and attend, but we cannot guarantee full travel reimbursement.
              </faqitem>
              <faqitem title="How does registration work?">
                Applications will open soon on vandyhacks.org. Acceptance is determined by a variety of factors, and applications will be reviewed by our board on a rolling basis. Once you’re accepted, you’ll receive an email from the VandyHacks team. If you're curious, email us for more info at
                <a href="mailto:info@vandyhacks.org" target="_blank">info@vandyhacks.org</a>!
              </faqitem>
              <faqitem title="What if I'm a Vanderbilt student?">
                All Vanderbilt students are encouraged to attend, regardless of major or background.
              </faqitem>
              <faqitem title="Are walk-ins allowed?">
                We ask that everyone complete an application, but walk-ins will be accepted if space allows. We cannot guarantee swag for walk-ins.
              </faqitem>
              <h3 class="faq-header">Logistics</h3>
              <faqitem title="How do I get there?">
                Cars, buses, or flights, depending on location! We'll be sending buses to specific schools with large numbers of applicants.
              </faqitem>
              <faqitem title="Will travel reimbursements be provided?">
                Travel reimbursements outside of the bus routes are tentative and will be awarded on a rolling basis.
              </faqitem>
              <faqitem title="Will there be parking available for attendees?">
                Yes! Attendees will be able to find parking at the 25th Avenue Garage, conveniently located next to Vanderbilt’s Engineering and Science Building. You can find it
                <a href="https://goo.gl/maps/qST6JAvvQAz">here</a>.
              </faqitem>
            </div>
            <div class="col-md-6 faq-col">
              <h3 class="faq-header">Event</h3>
              <faqitem title="What should I bring?">
                Be sure to bring your photo ID, laptop, phone, chargers, a change of clothes, toiletries, and any other devices you want to use. A government-issued ID is required to rent any hardware.
              </faqitem>
              <faqitem title="Where will I sleep?">
                We will have designated quiet rooms, so bring a blanket and pillow!
              </faqitem>
              <faqitem title="What will I eat?">
                Meals will be provided throughout the event, starting with dinner on Friday and ending with lunch on Sunday. Snacks will also be provided periodically. Vegetarian and gluten-free options are available. Be sure to designate any allergies or dietary restrictions on your application.
              </faqitem>
              <faqitem title="How are teams formed? Do I need a team?">
                Teams are limited to four people in size. If you're applying with a team, we will review all of your team members' applications to determine admission. We will also have a pitch session where attendees can share their ideas and find potential teammates. However, teams are not required, so feel free to work alone.
              </faqitem>
              <faqitem title="Will there be other activities besides hacking?">
                Of course! This year, our hacker experience team has planned a bunch of fun events for attendees to relax. Stay tuned for more info!
              </faqitem>
              <faqitem title="Do I need to stay the entire time?">
                Vanderbilt students are free to enter and leave the venue at all times. Students from other schools are asked to remain inside the venue throughout the entire event.
              </faqitem>
              <faqitem title="What if I’m interested in being a mentor?">
                Send us an email at
                <a href="mailto:info@vandyhacks.org">info@vandyhacks.org</a>.
              </faqitem>
              <h3 class="faq-header">Other</h3>
              <faqitem title="My question wasn't addressed here. What should I do?">
                Shoot us an email at
                <a href="mailto:info@vandyhacks.org">info@vandyhacks.org</a>.
              </faqitem>
            </div>
          </div>
        </div>
      </div>
      <div class="sponsors feature-block">
        <div class="text-contents">
          <h1>Sponsors</h1>
          <separator/>
          <sponsors/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MlhBadge from '~/components/MlhBadge.vue'
import Separator from '~/components/Separator.vue'
import Infobox from '~/components/Infobox.vue'
import FaqItem from '~/components/FaqItem.vue'
import GoogleMap from '~/components/GoogleMap.vue'
import Sponsors from '~/components/Sponsors.vue'

// Embedded SVG
import BatmanBuilding from '~/components/BatmanBuilding.vue'

export default {
  components: {
    mlhbadge: MlhBadge,
    separator: Separator,
    infobox: Infobox,
    faqitem: FaqItem,
    batmanbuilding: BatmanBuilding,
    googlemap: GoogleMap,
    sponsors: Sponsors
  }
}
</script>

<style lang="scss">
@import '~assets/scss/parallax.scss';
@import '~assets/scss/breakpoints.scss';

// There are offset issues on Chrome desktop, most noticeable at extremely low widths
// Do not attempt to try to fix them, the offsets are fine on mobile where they matter
.logo {
  position: absolute;
  left: 0;
  right: 0;
  margin: 16.66vh auto 0; // Responsiveness
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

.actions {
  text-align: center;
  margin-top: 40px;

  @media (min-width: $break-m) {
    margin-top: 45px;
  }

  @media (min-width: $break-l) {
    margin-top: 50px;
  }
}

.apply-btn {
  $btn-bg: #222a53;
  $btn-font-size: 16px;
  $btn-padding-v: 15px;
  $btn-padding-h: 3 * $btn-padding-v;

  color: white;
  background-color: $btn-bg;
  border-radius: 3px;
  text-decoration: none;
  padding: $btn-padding-v $btn-padding-h;
  font-size: $btn-font-size;
  font-weight: bold;
  transition: all 0.15s linear;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:hover,
  &:focus {
    background-color: #394574;
  }

  &:active {
    $size-factor: 0.93;

    background-color: darken($btn-bg, 10%);
    font-size: round($btn-font-size * $size-factor);
    padding: round($size-factor * $btn-padding-v) round($size-factor * $btn-padding-h);
  }
}

$skyline-color: #e0e7f5;

.skyline {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto 0;
  overflow: hidden;
  border-bottom: 50px solid $skyline-color; // Disguise subpixel rounding issues
  filter: drop-shadow(0 5px $skyline-color);

  @media (min-width: $break-sm) {
    border-bottom: 30px solid $skyline-color;
  }

  @media (min-width: $break-m) {
    border-bottom: 20px solid $skyline-color;
  }

  @media (min-width: $break-l) {
    border-bottom: none;
    filter: none;
  }
}

.page-content {
  top: 100%;
  background: #fff;
}

.feature-block {
  background: #fff;
}

.text-contents {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 36px;

  @media (min-width: $break-l) {
    padding: 60px;
  }

  h1 {
    text-align: center;
    @media (min-width: $break-l) {
      font-size: 36px;
    }
  }
}

// Content sections
.description {
  background: #222a53;
  color: white;
}

// .schedule {
.faq {
  background: #565f86;
  color: white;
}

.faq {
  text-align: center;

  .text-contents {
    text-align: left; // padding-bottom: 15px;
  }

  a {
    color: #d0d3e1;
  }
}

.faq-header {
  text-decoration: underline;
  font-weight: normal;
}

.faq-desk {
  max-width: 500px;
  margin-left: 30px;
  margin-right: 30px;
}

@media only screen and (min-width: 64em) {
  .faq-col:last-child {
    padding-left: 30px;
  }
}

// .sponsors {
//  background: #394574;
//  color: white;
// }
</style>
