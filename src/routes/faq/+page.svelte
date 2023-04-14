<script>
  import PageWrapper from '$lib/components/PageWrapper.svelte'

  const source = `
    # About ACM Outreach X RISD Hackathon & FAQ

    ## FAQ

    ### What if I don’t have a team?

    We will randomize groups for those who signed up without teammates! On the registration form you will indicate that you don’t have a team yet, and we’ll take care of the rest leading up to and on the day of the hackathon and group together teams.

    ### What are the rules of a hackathon?

    Your project must be built entirely over the course of the weekend. No previous projects or code may be used. Your behavior must follow the regular RISD Code of Conduct.

    ### What should I build?

    You can build anything you want. However, note that all projects will be judged for a chance to win one of the four challenges. If you're interested in winning prizes, try to tailor your project to target one of those challenges.

    ## Resources

    ### Workshops

    We recommend going over the material from our workshops again. These slides and recordings cover the basics of web design and programming that you need to know to make a website.

    - [Hackathon 101](https://drive.google.com/drive/folders/1OkfavZOuN38yZMeVSwqr8n9i3J9ek71v?usp=share_link)
    - [User Interface and Experience Design](https://drive.google.com/drive/folders/1OkfavZOuN38yZMeVSwqr8n9i3J9ek71v?usp=share_link)
    - [Introduction to HTML and CSS](https://drive.google.com/drive/folders/1tuqfiIakfnA7-nhzodcC0gp5PsB7WoEc?usp=share_link)
    - [Introduction to JavaScript](https://drive.google.com/drive/folders/1A0J6s2iQp5zHHeAiWQmHXNLnBWh8WXxe?usp=share_link)

    In addition to these recordings, we will also be hosting re-runs of the workshops over the course of the Hackathon. Check the [Schedule](/schedule) for times.

    ### Online

    You are welcome to use any online resources you find, as long as you do not copy/paste large portions of code or use a template. Some of our favorites are:

    - [StackOverflow](https://stackoverflow.com/) - Great for all programming related questions and issues. If you've got a question, there's a high chance someone else has already asked it and gotten an answer. Many answers contain working code snippets in addition to explanations.
    - [Mozilla Developer Network](https://developer.mozilla.org/en-US/) - The authority on all things JavaScript. This site is a great cheat sheet for commonly used built-in data types and functions.
    - [W3Schools](https://www.w3schools.com/) - Has many interactive demos for HTML and CSS.
    - [Google](https://google.com) - May seem obvious, but the first thing you should do when you run into a problem is try to google it. It is very likely that someone somewhere has had a similar (if not exactly the same) problem.
    - [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors) - This page has a large list of colors that look nice together. We recommend picking a color palette from here rather than trying to come up with your own.

    ### Us

    If all else fails, don't hesitate to come ask any of the ACM UTD representatives running the Hackathon for help! Sometimes the Internet just doesn't explain things in the right way, or you can't figure out _how_ to google your problem. This is a learning curve that everyone must face, and we are here to give you guidance.

    Of course, we highly recommend trying to find solutions to your problems on your own at first. You will often hear people in the programming industry joke about how _"half of my job is just reading StackOverflow"_, or something similar. However, this is not really a joke. Learning how to use the vast amount of free information available to you online is valuable in any discipline, but for programming it is absolutely a required skill. It's gonna take some trial and error at first, but the only way you'll become a bug-busting expert is through trial and error.
  `
</script>

<svelte:head>
  <title>Guide | RISD Hackathon</title>
</svelte:head>

<PageWrapper>
  <div class="max-w-4xl m-auto flex flex-col grow-0 shrink-0 space-y-24">
    <div class="flex flex-col space-y-4">
      <div class="text-2xl pixel border-b pb-2">FAQ</div>
      <div class="flex flex-col space-y-8">
        <div class="flex flex-col space-y-4">
          <div class="text-xl font-bold">What if I don&apos;t have a team?</div>
          <div class="text-lg">
            We will randomize groups for those who signed up without teammates! On the registration
            form you will indicate that you don&apos;t have a team yet, and we&apos;ll take care of
            the rest leading up to and on the day of the hackathon and group together teams.
          </div>
        </div>
        <div class="flex flex-col space-y-4">
          <div class="text-xl font-bold">What are the rules of a hackathon?</div>
          <div class="text-lg">
            Your project must be built entirely over the course of the weekend. No previous projects
            or code may be used. Your behavior must follow the regular RISD Code of Conduct.
          </div>
        </div>
        <div class="flex flex-col space-y-4">
          <div class="text-xl font-bold">What should I build?</div>
          <div class="text-lg">
            You can build anything you want. However, note that all projects will be judged for a
            chance to win one of the four challenges. If you're interested in winning prizes, try to
            tailor your project to target one of those challenges.
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col space-y-4">
      <div class="text-2xl pixel border-b pb-2">Resources</div>
      <div class="flex flex-col space-y-8">
        <div class="flex flex-col space-y-4">
          <div class="text-xl font-bold">Workshops</div>
          <div class="text-lg space-y-4">
            <div>
              We recommend going over the material from our workshops again. These slides and
              recordings cover the basics of web design and programming that you need to know to
              make a website.
            </div>
            <ul class="list-disc ml-12">
              <li>
                <a
                  class="text-sky-500 hover:underline"
                  href="https://drive.google.com/drive/folders/1OkfavZOuN38yZMeVSwqr8n9i3J9ek71v?usp=share_link"
                  >Hackathon 101</a
                >
              </li>
              <li>
                <a
                  class="text-sky-500 hover:underline"
                  href="https://drive.google.com/drive/folders/1OkfavZOuN38yZMeVSwqr8n9i3J9ek71v?usp=share_link"
                  >User Interface and Experience Design</a
                >
              </li>
              <li>
                <a
                  class="text-sky-500 hover:underline"
                  href="https://drive.google.com/drive/folders/1tuqfiIakfnA7-nhzodcC0gp5PsB7WoEc?usp=share_link"
                  >Introduction to HTML and CSS</a
                >
              </li>
              <li>
                <a
                  class="text-sky-500 hover:underline"
                  href="https://drive.google.com/drive/folders/1A0J6s2iQp5zHHeAiWQmHXNLnBWh8WXxe?usp=share_link"
                  >Introduction to JavaScript</a
                >
              </li>
            </ul>
            <div>
              In addition to these recordings, we will also be hosting re-runs of the workshops over
              the course of the Hackathon. Check your <a
                class="text-sky-500 hover:underline"
                href="/schedule">Quests</a
              > for times.
            </div>
          </div>
        </div>
        <div class="flex flex-col space-y-4">
          <div class="text-xl font-bold">Online</div>
          <div class="text-lg space-y-4">
            <div>
              You are welcome to use any online resources you find, as long as you do not copy/paste
              large portions of code or use a template. Some of our favorites are:
            </div>
            <ul class="list-disc ml-12 space-y-4">
              <li>
                <a class="text-sky-500 hover:underline" href="https://google.com">Google</a>
                <div>
                  May seem obvious, but the first thing you should do when you run into a problem is
                  google it. It is very likely that someone somewhere has had a similar (if not
                  exactly the same) problem.
                </div>
              </li>
              <li>
                <a class="text-sky-500 hover:underline" href="https://stackoverflow.com/"
                  >StackOverflow</a
                >
                <div>
                  Great for all programming related questions and issues. If you've got a question,
                  there's a high chance someone else has already asked it and gotten an answer. Many
                  answers contain working code snippets as well.
                </div>
              </li>
              <li>
                <a class="text-sky-500 hover:underline" href="https://developer.mozilla.org/en-US/"
                  >Mozilla Developer Network</a
                >
                <div>
                  The authority on all things JavaScript. This site is a great cheat sheet for
                  built-in data types and functions.
                </div>
              </li>
              <li>
                <a class="text-sky-500 hover:underline" href="https://www.w3schools.com/"
                  >W3Schools</a
                >
                <div>Interactive demos for HTML and CSS.</div>
              </li>
              <li>
                <a
                  class="text-sky-500 hover:underline"
                  href="https://tailwindcss.com/docs/customizing-colors">Tailwind Colors</a
                >
                <div>
                  This page has a large list of colors that look nice together. We recommend picking
                  a color palette from here rather than trying to come up with your own.
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col space-y-4">
          <div class="text-xl font-bold">Ask Us</div>
          <div class="text-lg space-y-4">
            <div>
              If all else fails, don't hesitate to come ask any of the ACM UTD representatives
              running the Hackathon for help! Sometimes the Internet just doesn't explain things in
              the right way, or you can't figure out <em>how</em> to google your problem. This is a learning
              curve that everyone must face, and we are here to give you guidance.
            </div>
            <div>
              Of course, we highly recommend trying to find solutions on your own. You will often
              hear people in the programming industry joke about how <em
                >"half of my job is just reading StackOverflow"</em
              >, or something similar. This is not really a joke. Learning how to use the vast
              amount of free information available to you online is valuable in any discipline, but
              for programming it is absolutely a required skill. It's gonna cause some mental
              anguish at first, but the only way you'll become a bug-busting expert is through trial
              and error.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</PageWrapper>
