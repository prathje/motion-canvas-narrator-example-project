/**
 * Motion Canvas Narrator Example Scene
 */

import {Circle, Txt, makeScene2D, Rect, Code, LezerHighlighter, lines} from '@motion-canvas/2d';
import {createRef, all, waitFor} from '@motion-canvas/core';
import {createElevenLabsNarrator} from 'motion-canvas-narrator';
import {parser} from '@lezer/javascript';

const TsHighlighter = new LezerHighlighter(parser);

export default makeScene2D(function* (view) {
  // Choose your narrator: ElevenLabs for production, Mock for development

  view.fill('#ffffff');

  // Create visual elements
  const title = createRef<Txt>();
  const circle = createRef<Circle>();
  const codeBox = createRef<Rect>();

  // Create references for subtitles
  const subtitleText = createRef<Txt>();
  const subtitleBox = createRef<Rect>();

  const code = createRef<Code>();

  view.add(
    <Rect
      layout
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      width={'100%'}
      height={'100%'}
      gap={50}
      padding={10}
    >
      <Txt
        ref={title}
        fontSize={55}
        fontWeight={500}
        fill={'#000000'}
        y={0}
        text={"Narrations in Code with Motion Canvas Narrator"}
      />
      <Rect
          layout
          alignItems={'center'}
          justifyContent={'space-between'}
          direction={'row'}
          width={'100%'}
          padding={10}>
        <Rect
            ref={codeBox}
            radius={12}
            fill="#0e1214"
            padding={20}
        >
          <Code
              ref={code}
              fontSize={16}
              highlighter={TsHighlighter}
              code={`\
const narrator = createNarrator();
yield* narrator.speak("Motion Canvas Narrator let's you define narrations in code.");
yield* narrator.speak("Seamlessly sync your narrations to your animations.");
yield* narrator.speak("Start narrating before...");
yield* circle().scale(2, 1);
yield* narrator.speak("or after the animation...");
yield* narrator.speak("Or how about narrating simultaneously?");
yield* all(
    narrator.speak("So that the narration and animation happen together!"),
    circle().scale(1, 3)
);
yield* narrator.speak("Use your own voice or use AI to iterate quickly.");
yield* narrator.speak("Start creating your next animated explanation today!");
              `}
          />
        </Rect>
        <Rect
            layout
            direction={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            width={"100%"}
        >
          <Circle
              ref={circle}
              size={120}
              fill="#FF6470"
          />
        </Rect>
      </Rect>

      <Rect
        fill={'#000000'}
        ref={subtitleBox}
        layout
        direction={'column'}
        alignItems={'center'}
        justifyContent={'space-between'}
        padding={10}
        radius={12}
      >
        <Txt
            ref={subtitleText}
            fontSize={32}
            fill="#ffffff"
            text="This is some text to reserve space!"
        />
      </Rect>
    </Rect>
  );

  // Motion Canvas Narrator
  const narrator = createElevenLabsNarrator({
    voiceId: 'JBFqnCBsd6RMkjVDRZzb',
    modelId: 'eleven_v3',// or for cheaper iterations: 'eleven_flash_v2_5',
    apiKey: '<YOUR_ELEVEN_LABS_API_KEY>' // you will need to add your own API key if you want to generate new audio
  });

  subtitleBox().opacity(0);
  view.opacity(0);
  yield* view.opacity(1, 2.0);


  yield* code().selection(lines(0), 0.6);
  subtitleBox().opacity(1);
  subtitleText().text("Motion Canvas Narrator let's you define narrations in code.");
  yield* waitFor(0.75);
  yield* code().selection(lines(0, 1));
  yield* narrator.speak("Motion Canvas Narrator let's you define narrations in code.");

  yield* waitFor(0.25);
  subtitleText().text("Seamlessly sync your narrations to your animations.");
  yield* code().selection(lines(2));
  yield* narrator.speak("Seamlessly sync your narrations to your animations.");

  yield* waitFor(0.25);
  subtitleText().text("Start narrating before...")
  yield* code().selection(lines(3));
  yield* narrator.speak("Start narrating before...");
  yield* code().selection(lines(4));
  yield* circle().scale(2, 1);

  yield* waitFor(0.25);
  yield* code().selection(lines(5));
  subtitleText().text("or after the animation...")
  yield* narrator.speak("or after the animation...");

  yield* waitFor(1.0);
  subtitleText().text("Or how about narrating simultaneously?")
  yield* code().selection(lines(6));
  yield* waitFor(0.25);
  yield* narrator.speak("Or how about narrating simultaneously?");
  subtitleText().text("So that the narration and animation happen together!")
  yield* code().selection(lines(7, 10));
  yield* waitFor(0.25);
  yield* all(
      narrator.speak("So that the narration and animation happen together!"),
      circle().scale(1, 3)
  );

  yield* waitFor(1.0);
  yield* code().selection(lines(11));
  subtitleText().text("Use your own voice or use AI to iterate quickly.")
  yield* narrator.speak("Use your own voice or use AI to iterate quickly.");

  yield* waitFor(1.0);
  yield* code().selection(lines(12));
  subtitleText().text("Start creating your next animated explanation today!")
  yield* narrator.speak("Start creating your next animated explanation today!");


  yield* view.opacity(0.0, 2.0);
});
