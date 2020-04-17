'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "genres",
      [
        {
          name: "Ambient music", 
          history: "In the 1960s, many music groups experimented with unusual methods, with some of them creating what would later be called ambient music. Developing in the 1970s, ambient stemmed from the experimental and synthesizer-oriented styles of the period. Brian Eno played a key role in its development and popularization. The English producer Brian Eno is credited with coining the term `ambient music` in the mid-1970s. He said other artists had been creating similar music, but that `I just gave it a name. Which is exactly what it needed ... By naming something you create a difference. You say that this is now real. Names are very important.` He used the term to describe music that is different from forms of canned music like Muzak.The continued development of the synthesizer, namely the FM synthesizer, was instrumental in the maturing of ambient music throughout the 1980s. With the commercial release of synthesizers such as the Yamaha DX7 and the Korg M1 in the mid 1980s, the possibilities to create a sonic landscape increased through the use of sampling. Many of these FM synthesizers included capabilities of MIDI clock synching and external hardware compatibility, allowing the music to be much more textured than before. By the early 1990s, artists such as the Orb, Aphex Twin, Seefeel, the Irresistible Force, Geir Jenssen's Biosphere, and the Higher Intelligence Agency gained commercial success and were being referred to by the popular music press as ambient house, ambient techno, IDM or simply `ambient`. ",
          oneLineDescr: "Ambient music is a genre of music that emphasizes tone and atmosphere over traditional musical structure or rhythm.",
          characteristics: "A form of instrumental music, it may lack net composition, beat, or structured melody.",
          origins: "The genre originated in the 1960s and 1970s, when new musical instruments were being introduced to a wider market, such as the synthesizer.[12] It was presaged by Erik Satie's furniture music and styles such as Jamaican dub music and German electronic music, but was prominently named and popularized by British musician Brian Eno in 1978 with his album Ambient 1: Music for Airports; Eno opined that ambient music `must be as ignorable as it is interesting`. It saw a revival towards the late 1980s with the prominence of house and techno music, growing a cult following by the 1990s. Ambient music may have elements of new-age music and drone music, as some works may use sustained or repeated notes.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Space rock", 
          history: "Space rock emerged from the late 1960s psychedelic music scene in Britain, and was closely associated with the progressive rock movement of the same era.",
          oneLineDescr: "Shoegazing (or shoegaze, initially known as `dream pop`) is a subgenre of indie and alternative rock that emerged in the United Kingdom in the late 1980s.",
          characteristics: "Shoegazing combines ethereal, swirling vocals with layers of distorted, bent, flanged guitars, creating a wash of sound where no instrument is distinguishable from another.",
          origins: "The genre emerged in late 1960s psychedelia and progressive rock bands such as Pink Floyd, Hawkwind, and Gong who explored a `cosmic` sound. Later, the style was taken up in the mid-1980s by Spacemen 3, whose `drone-heavy` sound was avowedly inspired by and intended to accommodate drug use. By the 1990s, space rock developed into shoegazing and post-rock[1] with bands such as Failure, Hum, Flying Saucer Attack, and Orange Goblin.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shoegazing", 
          history: "The term originated in a concert review in Sounds for the newly formed band Moose in which singer Russell Yates read lyrics taped to the floor throughout the gig.[19] The term was picked up by NME, who used it as a reference to the tendency of the bands' guitarists to stare at their feet—or their effects pedals—while playing, seemingly deep in concentration. Melody Maker preferred calling it `The Scene That Celebrates Itself`, referring to the habit that the bands had of attending gigs of other shoegazing bands, often in Camden, and often playing in each other's bands", 
          oneLineDescr: "A style of rock music that emerged in England in the late 80s that featured blisteringly loud and dreamily reverberated feedback. Recently revived by electronic bands like M83 and Ulrich Schnauss.",
          characteristics: "It is a rock music genre characterized by loose and lengthy song structures centered on instrumental textures that typically produce a hypnotic, otherworldly sound. It may feature distorted and reverberation-laden guitars, minimal drumming, languid vocals, synthesizers and lyrical themes of outer space and science fiction.",
          origins: "The genre emerged in late 1960s psychedelia and progressive rock bands such as Pink Floyd, Hawkwind, and Gong who explored a `cosmic` sound. Later, the style was taken up in the mid-1980s by Spacemen 3, whose `drone-heavy` sound was avowedly inspired by and intended to accommodate drug use. By the 1990s, space rock developed into shoegazing and post-rock[1] with bands such as Failure, Hum, Flying Saucer Attack, and Orange Goblin.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("genres", null, {});
  },
};
