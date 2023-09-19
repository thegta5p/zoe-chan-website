import Image from "next/image";
import MainLayout from "../../components/mainLayout";

export default function ZoeBiography() {
  return (
    <>
      <MainLayout>

      </MainLayout>

      <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl">Zoe</h1>
        <h1>The Aspect of Twilight</h1>
        <Image src="/images/Zoe_0.jpg" width={700} height={700}/>
      </div>

      <div className="grid gap-y-4 grid-cols-3">
        <div className="mx-28">
          <p className="text-lg">
            <b>Species: </b>Aspect Host
          </p>
        </div>
        <div className="mx-28">
          <p className="text-lg">
            <b>Age: </b>1398
          </p>
        </div>
        <div className="mx-28">
          <p className="text-lg">
            <b>Hair Color: </b>Orange
          </p>
        </div>
        <div className="mx-28">
          <p className="text-lg">
            <b>Eye Color: </b>Purple Blue
          </p>
        </div>
        <div className="mx-28">
          <p className="text-lg">
            <b>Place of Origin: </b>Mount Targon, Targon
          </p>
        </div>
      </div>
      <div className="max-w-4xl py-10 mx-auto justify-center">
        <p className="py-2">
        As befits her Targonian Aspect’s nature, Zoe did not come to the attention of the celestial realm in any traditional way. She didn’t win a great victory against overwhelming odds, or sacrifice herself for a noble ideal, or overcome the existential trial of climbing Mount Targon. Instead, Zoe was a normal girl, seemingly chosen at random from among the Rakkor.
        </p>
        <p className="py-2">
        Her teachers reported Zoe to be an imaginative child, but willful, lazy, mischievous, and easily distracted. One day, as she skipped away from her studies of the holy texts to pursue something “less boring,” she was noticed by the Aspect of Twilight.
        </p>
        <p className="py-2">
        It observed as the young girl playfully mocked the angry cries of the scholarly priests chasing her through the village. Then, after an hour-long pursuit, she found herself cornered against the sheer drop of a cliff’s edge. Before Zoe’s teachers could grab her, the Aspect summoned six objects in front of her: a bag of gold coins, a sword, a completed study book, a devotion rug, a silk rope, and a toy ball. Five of these items could have let her flee, or otherwise defuse the situation.
        </p>
        <p className="py-2">
        Zoe chose the sixth option.
        </p>
        <p className="py-2">
        Unconcerned with escape or forgiveness, she instead grabbed the toy ball, kicked it toward the wall of a nearby house, and sang gleefully as it ricocheted among the humorless priests.
        </p>
        <p className="py-2">
        The Aspect hadn’t seen such joyful irreverence in the face of peril since its last host, who heralded the end of the Great Darkin War. Delighted by Zoe’s carefree exuberance, it opened a shimmering portal to the apex of Mount Targon, offering the girl a chance to see the universe. She dived backward into the portal, instantly merging with the Aspect, then stuck her tongue out at her dumbfounded teachers as she disappeared.
        </p>
        <p className="py-2">
        This transcendence was unique—in fact, it was unheard of in all the myths and legends of Targon. Yet Zoe did not trouble herself with why the rules that govern Aspects had been changed just for her. She didn’t trouble herself with rules at all. Instead, she journeyed to dimensions of reality at the very edge of mortal comprehension, playing with powers seen by few before or since.
        </p>
        <p className="py-2">
        While for Zoe barely a year had passed, she returned home after what had apparently been many centuries in Runeterra. Full of teenage curiosity, she wondered what she had missed while she was away. Fortunately, she could traverse the streams of time with only a thought. Among the events she witnessed were the rise and fall of “the big armored meanie,” Mordekaiser; the destruction of the Blessed Isles in the “Spooky Ghost Party”; the cataclysms of the “War for Sparkly Rocks”; and the founding of a dour new nation near the “No Fun Forest.”
        </p>
        <p className="py-2">
        One thing in particular became clear to Zoe—she was not alone. Walking the mortal world were other Aspects, in fact more than ever before. More friends for her to meet! But they brushed her aside time and again, seeming rather preoccupied with whatever it was they were doing in the spaces between realms. Intrigued, Zoe traveled to the stars, where she found the great cosmic dragon, Aurelion Sol.
        </p>
        <p className="py-2">
        Although he clearly despised her, as he did all of her kind, Zoe always returned to the dragon’s side, trying to discover what aggrieved him. From his bombastic and self-aggrandizing diatribes, she gleaned that her fellow Aspects had humiliated him, crowning him with a cursed artifact to siphon away his power.
        </p>
        <p className="py-2">
        Zoe felt sorry for this poor “space doggy,” and vowed to do what she could to protect him. For his part, Aurelion Sol has at least stopped threatening to destroy her when he eventually takes his long-overdue vengeance.
        </p>
        <p className="py-2">
        Whether Zoe’s curious relationship with the Star Forger is due to a mere whim, possessiveness, or her function as a cosmic disrupter, no one can be certain
        </p>
        <p className="py-2">
        For the scholars and mystics of Mount Targon, the emergence of an Aspect is usually a joyous occasion... but Zoe’s unpredictability gives them pause, as not even she knows what her presence could portend. The only certainty is that Runeterra is on the brink of a profound transformation—one that may come at the cost of chaos, destruction, and blood.
        </p>

      </div>

    </>
  )
}