const log = console.log;

let text =
  "He wants to take your body and all pleasures of away from you  We are serving The Garden of Delights Immortality Cosmic Consciousness  How does that sound boys? Better than his cold windy bodiless rock? Right? At the immediate risk of finding myself most unpopular character all fiction  history is must say this: Bring together state news Inquire onward from state doer  Who monopolized Love Sex and Dream? Who monopolized Life Time and Fortune? Who took from what yours Now they will give it all back Did ever give anything away for nothing Listen: map this area of terminal sewage  Their Immortality Cosmic Consciousness Love second-run grade learn make without any chemical corn To cover travel arrangements so they will never have to pay the constituents they have betrayed and sold out Once these arrangements are complete they will blow the place up behind them And what does my program of total austerity and total resistance  you  offer you nothing And these are my instructions for total emergency if carried out now could avert the total disaster now on tracks Peoples of the earth, you have all been poisoned Convert all available stocks of morphine to apomorphine Chemists, work round the clock on variation and synthesis of the  formulae  is the only agent that can disintoxicate you and cut the enemy beam off your line  and  and all those engaged in it  show who they are and what they are doing and what they will do if they are not arrested Souls rotten from their orgasm drugs, flesh shuddering from their nova ovens, prisoners of the earth to come out,  To speak is to lie To live is to collaborate There are degrees of lying collaboration and cowardice It is precisely a question of regulation The enemy exists only where no life is and moves always to push life into extreme untenable positions by the judicious use of and silence Use the sanity drug  is made from  but its physiological action is quite different depresses the front brain stimulates the back brain, acts on the hypothalamus to regulate the percentage of various constituents in the blood serum and so normalize the constitution of the blood quote from  involving this two-way time stock Like nobody there before the film So they start to run it back and the projector blew up and we lammed out of there on the blast Holed up in those cool blue mountains the liquid air in our spines listening to a little high-fi junk note fixes you right to metal and you nod out a thousand years Just sitting there in a slate house wrapped in orange flesh robes, the blue mist drifting around us when we get the call  that burnt metal reek of nova This is a burning planet Any minute now the whole house goes up So Intolerable I&I sniffs and says: Yea, when it happens it happens fast  And you could feel it there under your feet the whole structure buckling like a bulkhead about to blow  So the paper has a car there for us and we are driving in from the airport  Nearly ran down a covey of pedestrians, and they yell after What you want to do, kill somebody? from zero to zero as all biologic  run in any time universe Call this film XI and postulate further that there can only be one  with the quality in any given time universe  is the  and performers is the audience who are all trying to get into the Nobody is permitted to leave the biologic theater which in this case is the human body Because if anybody did leave the theater he would be looking at a different  and Film and audience would then cease to exist by mathematical definition In 1960 with the publication of Minutes to Go, Martin's stale movie was greeted by an unprecedented chorus of boos and a concerted walkout We seen this five times already and not standing still for another twilight of your tired Gods Since junk is image the effects of junk can easily be produced and concentrated in a sound and image track Like this: Take a sick junky Throw blue light on his so-called face or dye it blue or dye blue it don't make no difference and now give him a shot and photograph  blue miracle life pours back into that walking corpse That will give you the image track of Now project the blue change onto your own face if you want The Big Fix The sound track is even easier  So you record the frequency of junk as it hits the junk-sick brain cells Brain waves are  or under and can't be heard?  And instead of one junky concentrate me a thousand Let there be Lexington and call a nice in to run it";

const sentences = [
  "Don't listen to Hassan i Sabbah",
  "They will tell you.",
  "Listen to us.",
  "And love love love in slop buckets.",
  "Who monopolized Immortality?",
  "Their drugs are poison designed to beam in Orgasm Death and Nova Ovens",
  "It is a man-eating trap that ends in green goo",
  "They are poisoning and monopolizing the hallucinogen drugs",
  "All that they offer is a screen to cover retreat from the colony they have so disgracefully mismanaged",
  "Their Garden Of Delights is a terminal sewer",
  "Stay out of the Garden Of Delights",
  "Throw back their ersatz Immortality",
  "It will fall apart before you can get out of The Big Store",
  "Flush their drug kicks down the drain",
  "I offer you nothing",
  "I am not a politician",
  "These are conditions of total emergency",
  "I order total directed against this conspiracy to pay off",
  "Silence peoples of the earth in ersatz bullshit",
  "I order total resistance directed against The Nova Conspiracy",
  "Who monopolized Cosmic Consciousness?",
  "The purpose of my writing is to expose and arrest Nova Criminals",
  "Minutes to go",
  "Retake their universe of Fear Death and Monopoly",
  "I would like to sound a word of warning",
  "Anybody is a coward when faced by the nova ovens",
  "That is to say degrees of intoxication",
  "The enemy is not man is not woman",
  "You can cut the enemy off your line",
  "Pry yourself loose and listen",
  "I was traveling with The Intolerable Kid on The Nova Lark",
  "We were on the nod after a rumble in The Crab Galaxy",
  "when you come to the end of a biologic film just run it back and start over",
  "With your help we can occupy The Reality Studio and Post Script of The Regulator",
  "Nobody knows the difference",
  "And as soon as I set foot on Podunk earth I can smell it",
  "Already set off the charge",
  "This is a rush job",
  "The Kid at the wheel and his foot on the floor",
  "Postulate a biologic film running from the beginning to the end",
  "Quote from Newsweek Science section",
  "Every substance has a characteristic set of resonant frequencies at which it vibrates or oscillates",
  "What's that?",
  "Well speed them up, God damn it!",
];

// variables to access element nodes:
const mainContainer = document.getElementById("form");
const textContainer = document.getElementById("text-container");
const wordsRadio = document.getElementById("words");
const paragsRadio = document.getElementById("paragraphs");
const numOfElements = document.getElementById("number-of-elements");
const generateBtn = document.getElementById("generate-btn");

// get rid of most occurring words such as pronouns, conjunctions, etc.
let regex = /\s+as+\s|even|\s+if+\s|\s+so+\s|\s+that+\s|when|where|\s+me+\s|\s+you+\s|\s+she+\s|\s+her+\s|\s+he+\s|\s+him+\s|\s+it+\s|\s+we+\s|\s+us+\s|they|\s+them+\s|\s+who+\s|whom|whoever|whomever|which|whichever|\s+this+\s|those|these|\s+few+\s|\s+all+\s|\s+any+\s|\s+most+\s|\s+some+\s|\s+what+\s|\s+my+\s|\s+our+\s|\s+your+\s|\s+his+\s|\s+her+\s|\s+its+\s|their|yours|theirs|hers|\s+the+\s|\s+a+\s|\s+and+\s|\s+to+\s|\s+in+\s|\s+or+\s|\s+of+\s|\s+is+\s|\s+be+\s|\s+is+\s|\s+get+\s|,/g;

text = text.toLowerCase();

// split "text" into separate words
const textToArr = text.replace(regex, " ").split(" ");

// get rid of all empty elements from the "words" array
const words = textToArr.filter((item) => item.length > 0);

// functions:

// generate random integer
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// event listener generating text
mainContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  // if amount of words is specified, sentences are created with items from "words" array
  if (wordsRadio.checked && numOfElements.value > 0) {
    const textArr = [];
    let output1 = "";
    let output2 = "";
    for (let i = 1; i <= numOfElements.value; i++) {
      let randomIndex = getRandomInt(0, words.length);
      textArr.push(words[randomIndex]);
    }
    // capitalizing first word done separately here:
    let firstWord = textArr[0][0].toUpperCase() + textArr[0].slice(1);
    textArr.splice(0, 1, firstWord);
    // output with a single sentence (length <= 5)
    output1 += `${textArr.join(" ")}.`;
    textContainer.textContent = output1;
    // if required amount of words is greater than 5, create random-length sentences by separating each one with a dash and capitalizing first letter following each dash
    if (textArr.length > 5) {
      for (let j = 5; j < textArr.length; j += randIncrement) {
        // increment randomly to set different lengths of sentences
        randIncrement = getRandomInt(5, 10);
        // each dash comes with one random word to maintain the correct amount of words requested by user
        textArr.splice(j, 1, `${words[getRandomInt(0, words.length)]} -`);
      }
      // split text into individual letters and iterate through them in order to capitalize first letter following each dash of the text
      output2 = textArr.join(" ").split("");
      for (let l = 0; l < output2.length; l++) {
        if (output2[l - 1] + output2[l] + output2[l + 1] === " - ") {
          output2[l + 2] = output2[l + 2].toUpperCase();
        }
        // remove dash from the end of the output if necessary
        if (output2[output2.length - 1] === "-") {
          output2.splice(output2.length - 1);
        }
      }
      textContainer.textContent = output2.join("");
    }
  }
  // if user sets amount of paragraphs, these are created with items from "sentences" array (whole sentences)
  if (paragsRadio.checked && numOfElements.value > 0) {
    let output3 = [];
    for (let k = 1; k <= numOfElements.value; k++) {
      const paragraph = [];
      let randParagLength = getRandomInt(6, 9);
      for (let m = 1; m <= randParagLength; m++) {
        let randomIndex = getRandomInt(0, sentences.length);
        paragraph.push(sentences[randomIndex]);
      }
      // sentences are separated with dash, paragraphs with </br>
      output3.push("<p>" + paragraph.join(" - ") + "</p>" + "</br>");
    }
    textContainer.innerHTML = output3.join(" ");
  }
});
