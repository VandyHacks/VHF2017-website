<style scoped>
.sched-col {
    flex: 1;
    margin: 20px 1.5em 0;
}

@media (max-width: 1023px) {
    .sched-col {
        flex: 0 0 100%;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 1.25em;
    }
}

@media (min-width: 1024px) and (max-width: 1279px) {
    .sched-col {
        margin: 20px 1em 0;
    }
}

.sched-col:first-child {
    margin-left: 0;
}

.sched-col:last-child {
    margin-right: 0;
}

.date {
    text-decoration: underline;
    text-align: center;
    font-weight: 400;
    margin-bottom: 1em;
}

.event {
    padding: .75em;
}

.event:nth-child(odd) {
    background: rgba(255, 255, 255, 0.05);
}

.event-name,
.event-time {
    display: inline-block;
}

.event-name {
    font-weight: bold;
}

.event-time {
    float: right;
}
</style>

<template>
    <div class="row">
        <div class="sched-col">
            <h3 class="date">Friday, October 20th</h3>
            <div class="events">
                <div class="event">
                    <div class="event-name">Check-in</div>
                    <div class="event-time">5:30p</div>
                </div>
                <div class="event">
                    <div class="event-name">Dinner</div>
                    <div class="event-time">6:00p</div>
                </div>
                <div class="event">
                    <div class="event-name">Opening Ceremony</div>
                    <div class="event-time">8:00p</div>
                </div>
                <div class="event">
                    <div class="event-name">Hacking Begins</div>
                    <div class="event-time">10:00p</div>
                </div>
                <div class="event">
                    <div class="event-name">Git Tech Talk</div>
                    <div class="event-time">10:00p</div>
                </div>
                <div class="event">
                    <div class="event-name">Beginner Switch Session</div>
                    <div class="event-time">10:30p</div>
                </div>
                <div class="event">
                    <div class="event-name">Beginner Tech Talks</div>
                    <div class="event-time">11:00p</div>
                </div>
            </div>
        </div>
        <div class="sched-col">
            <h3 class="date">Saturday, October 21st</h3>
            <div class="events">
                <div class="event">
                    <div class="event-name">Midnight Snack</div>
                    <div class="event-time">12:00a</div>
                </div>
                <div class="event">
                    <div class="event-name">Intermediate Tech Talks</div>
                    <div class="event-time">12:00a</div>
                </div>
                <div class="event">
                    <div class="event-name">Breakfast</div>
                    <div class="event-time">8:00a</div>
                </div>
                <div class="event">
                    <div class="event-name">Advanced Tech Talks</div>
                    <div class="event-time">9:00a</div>
                </div>
                <div class="event">
                    <div class="event-name">Lunch</div>
                    <div class="event-time">12:00p</div>
                </div>
                <div class="event">
                    <div class="event-name">Dinner </div>
                    <div class="event-time">5:30p</div>
                </div>
                <div class="event">
                    <div class="event-name">Werewolf, hosted by MLH</div>
                    <div class="event-time">9:00p</div>
                </div>
            </div>
        </div>
        <div class="sched-col">
            <h3 class="date">Sunday, October 22nd</h3>
            <div class="events">
                <div class="event">
                    <div class="event-name">Midnight Snack</div>
                    <div class="event-time">12:00a</div>
                </div>
                <div class="event">
                    <div class="event-name">Breakfast</div>
                    <div class="event-time">8:00a</div>
                </div>
                <div class="event">
                    <div class="event-name">Hacking Ends</div>
                    <div class="event-time">10:00a</div>
                </div>
                <div class="event">
                    <div class="event-name">How to Demo Talk</div>
                    <div class="event-time">10:00a</div>
                </div>
                <div class="event">
                    <div class="event-name">Lunch</div>
                    <div class="event-time">11:00a</div>
                </div>
                <div class="event">
                    <div class="event-name">Project Expo</div>
                    <div class="event-time">11:30a</div>
                </div>
                <div class="event">
                    <div class="event-name">Closing Ceremony</div>
                    <div class="event-time">1:30p</div>
                </div>
            </div>
        </div>
    </div>
</template>