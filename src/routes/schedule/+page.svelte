<script>
  import PageWrapper from '$lib/components/PageWrapper.svelte'
  import Clock from '$lib/components/icons/24/solid/Clock.svelte'

  const BACKGROUND = {
    general: '#047857', // emerald 700
    challenge: '#9f1239', // rose 800
    workshop: '#075985', // sky 800
    activity: '#5b21b6', // violet 800
    passed: '#27272a', // zinc 800
  }
  const TITLE = {
    general: '#a7f3d0', // emerald 200
    challenge: '#ffe4e6', // rose 100
    workshop: '#bae6fd', // sky 200
    activity: '#e9d5ff', // violet 200
    passed: '#a1a1aa', // zinc 400
  }
  const DESC = {
    general: '#6ee7b7', // emerald 300
    challenge: '#fecdd3', // rose 200
    workshop: '#7dd3fc', // sky 300
    activity: '#c4b5fd', // violet 300
    passed: '#71717a', // zinc 500
  }
  const days = [
    {
      date: new Date(2023, 3, 10), // month is 0-indexed
      events: [
        {
          name: 'Breakfast/Check-in',
          desc: 'Eat bagels, get settled in with your team, and brainstorm',
          type: 'general',
          stime: [9, 0],
          etime: [9, 30],
          isInterval: true,
        },
        {
          name: 'Opening Ceremony',
          desc: 'We will give an event overview and announce the challenges',
          type: 'general',
          stime: [9, 30],
          etime: [10, 0],
          isInterval: true,
        },
        {
          name: 'Challenges Open',
          desc: 'PLAYER 1 START!',
          type: 'challenge',
          stime: [10, 0],
          etime: [11, 0],
          isInterval: false,
        },
        {
          name: 'College 101',
          desc: 'Hear from panelists about their college experience and why you should consider a career in tech',
          type: 'workshop',
          stime: [11, 0],
          etime: [12, 0],
          isInterval: true,
        },
        {
          name: 'Lunch',
          desc: 'Eat pizza and give your brain a break',
          type: 'general',
          stime: [12, 0],
          etime: [13, 0],
          isInterval: true,
        },
        {
          name: 'ACM Projects + Research',
          desc: 'Hear from members of the ACM Projects and ACM Research divisions',
          type: 'workshop',
          stime: [13, 0],
          etime: [14, 0],
          isInterval: true,
        },
        {
          name: 'Workshop Reruns',
          desc: 'We will be going over all workshop slides again',
          type: 'workshop',
          stime: [14, 0],
          etime: [16, 0],
          isInterval: true,
        },
        {
          name: 'ACM Education',
          desc: 'Learn about the various programming-related opportunities ACM Education offers',
          type: 'workshop',
          stime: [16, 0],
          etime: [17, 0],
          isInterval: true,
        },
        {
          name: 'Dinner',
          desc: 'Wind down with some tacos',
          type: 'general',
          stime: [17, 0],
          etime: [18, 0],
          isInterval: true,
        },
        {
          name: 'Just Dance Tournament',
          desc: 'After sitting down all day, take to the dance floor and show off your skills in a bracket tournament',
          type: 'activity',
          stime: [18, 0],
          etime: [19, 0],
          isInterval: true,
        },
        {
          name: 'Doors Close',
          desc: 'Everyone is gonna be exhausted, so get some sleep before tomorrow',
          type: 'general',
          stime: [20, 0],
          etime: [20, 30],
          isInterval: false,
        },
      ],
    },
    {
      date: new Date(2023, 3, 15), // month is 0-indexed
      events: [
        {
          name: 'Breakfast/Check-in',
          desc: 'Each some breakfast tacos and plan your development day',
          type: 'general',
          stime: [9, 0],
          etime: [9, 30],
          isInterval: true,
        },
        {
          name: 'Opening Remarks',
          desc: "Short overview of the day's events",
          type: 'general',
          stime: [9, 30],
          etime: [10, 0],
          isInterval: true,
        },
        {
          name: 'Tower Building Tournament',
          desc: 'Team up to build the tallest stable tower out of marshmallows and spaghetti',
          type: 'activity',
          stime: [10, 0],
          etime: [11, 0],
          isInterval: true,
        },
        {
          name: 'Women in STEM',
          desc: 'Hear from Society of Women Engineers members about their experience in the STEM world',
          type: 'workshop',
          stime: [11, 0],
          etime: [12, 0],
          isInterval: true,
        },
        {
          name: 'Lunch',
          desc: 'More pizza. Plan your development tasks for the home stretch!',
          type: 'general',
          stime: [12, 0],
          etime: [13, 0],
          isInterval: true,
        },
        {
          name: 'Challenges Close',
          desc: 'Projects must be submitted. Prepare for your presentation',
          type: 'challenge',
          stime: [14, 0],
          etime: [14, 30],
          isInterval: false,
        },
        {
          name: 'Presentations',
          desc: 'Each team will present their project to judges and other hackers',
          type: 'general',
          stime: [14, 30],
          etime: [16, 0],
          isInterval: true,
        },
        {
          name: 'Closing Ceremony',
          desc: 'Challenge winner announced.',
          type: 'general',
          stime: [16, 0],
          etime: [17, 0],
          isInterval: true,
        },
        {
          name: 'Doors Close',
          desc: 'See you next year!',
          type: 'general',
          stime: [17, 0],
          etime: [17, 30],
          isInterval: false,
        },
      ],
    },
  ]

  function hourString(time) {
    const [hour, minute] = time
    const pm = hour >= 12
    return `${hour > 12 ? hour - 12 : hour}:${minute < 10 ? '0' + minute : minute} ${
      pm ? 'PM' : 'AM'
    }`
  }
  function getColor(date, event, part) {
    if (Date.now() > date.setHours(event.stime[0], event.stime[1])) return part.passed
    return part[event.type]
  }
</script>

<svelte:head>
  <title>Quests | RISD Hackathon</title>
</svelte:head>

<PageWrapper>
  <div class="max-w-4xl m-auto flex flex-col grow-0 shrink-0">
    <div class="flex flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0 lg:justify-center">
      {#each days as day}
        <div>
          <div class="flex flex-row pixel text-4xl justify-center pb-4">
            {day.date.toLocaleString('en-US', { weekday: 'long' })}
          </div>
          <div class="flex flex-col space-y-4">
            {#each day.events as event}
              <div
                style={`background-color: ${getColor(day.date, event, BACKGROUND)};`}
                class="flex flex-col rounded-lg space-y-2 p-6 border border-zinc-700"
              >
                <div
                  style={`color: ${getColor(day.date, event, TITLE)};`}
                  class="text-2xl font-bold"
                >
                  {event.name}
                </div>
                <div class="flex flex-row items-center space-x-2">
                  <div
                    style={`color: ${getColor(day.date, event, DESC)};`}
                    class="w-[24px] h-[24px]"
                  >
                    <Clock />
                  </div>
                  <div style={`color: ${getColor(day.date, event, DESC)};`} class="text-m">
                    {hourString(event.stime)}
                  </div>
                  {#if event.isInterval}
                    <div style={`color: ${getColor(day.date, event, DESC)};`} class="text-m">-</div>
                    <div style={`color: ${getColor(day.date, event, DESC)};`} class="text-m">
                      {hourString(event.etime)}
                    </div>
                  {/if}
                </div>
                <div style={`color: ${getColor(day.date, event, DESC)};`} class="text-m">
                  {event.desc}
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</PageWrapper>
