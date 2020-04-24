'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "genres",
      [
        {
          name: "Alternative Rock", 
          history: "n September 1988, Billboard introduced `Alternative Songs` into their charting system rather than continue incorporating alternative artists into the existing rock and pop charts.[6] By then, `alternative` had become a catch-all description for both successful artists such as U2 and R.E.M.",
          oneLineDescr: "Alternative rock (also called alternative music, alternative pop, alt-rock, alt-pop or simply alternative) is a term used to categorize rock music that emerged from the independent music underground of the 1970s and became widely popular in the 1980s. `Alternative` refers to the genre's distinction from mainstream or commercial rock or pop music.",
          characteristics: "The name `alternative rock` essentially serves as an umbrella term for underground music that has emerged in the wake of punk rock since the mid-1980s.[",
          origins: "Traditionally, alternative rock broadly consisted of music that differed greatly in terms of its sound, social context and regional roots. Throughout the 1980s, magazines and zines, college radio airplay, and word of mouth had increased the prominence and highlighted the diversity of alternative rock, helping to define a number of distinct styles (and music scenes) such as noise pop, indie rock, grunge, and shoegaze. ",
          img: "https://images-na.ssl-images-amazon.com/images/I/81nn0TyuiAL._SL1200_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Indie Rock", 
          history: "Indie rock is a mixture of many other genres, including alternative rock, folk music, electronica, even pop. It also tends to be very positive music, despite popular opinion.",
          oneLineDescr: "Genre of music, nicknamed after the independent labels which support lesser-known bands. ",
          characteristics: "Many indie rock bands are characterized by the use of unique or less-popular instruments. ",
          origins: "More well-known rockers that are excellent introductions: The Killers, Death Cab for Cutie, Modest Mouse, Arctic Monkeys, Spoon, Yeah Yeah Yeahs",
          img: "https://f4.bcbits.com/img/a4124904413_10.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Math Rock", 
          history: "The albums Red[10] by King Crimson and Spiderland[11] by Slint are generally considered seminal influences on the development of math rock.",
          oneLineDescr: "As in traditional rock, the sound is most often dominated by guitars and drums. But drums play a greater role in math rock in providing driving complex rhythms. ",
          characteristics: "Math rock is typified by its rhythmic complexity, seen as mathematical in character by listeners and critics. While most rock music uses a 4/4 meter (however accented or syncopated), math rock makes use of more non-standard, frequently changing time signatures such as 7/8, 11/8, or 13/8. ",
          origins: "Math rock is a style of progressive and indie rock with roots in bands such as King Crimson and Rush",
          img: "https://www.progarchives.com/progressive_rock_discography_covers/9320/cover_4343232015_r.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dream Pop", 
          history: "Author Nathan Wiseman-Trowse explained that the `approach to the sheer physicality of sound` integral to dream pop was `arguably pioneered in popular music by figures such as Phil Spector and Brian Wilson`. ",
          oneLineDescr: "Dream pop (or dreampop)[6] is a subgenre of alternative rock[1] and neo-psychedelia[3] that developed in the 1980s.",
          characteristics: "Dream pop is thought to relate to the `immersion` in the music experienced by the listener.",
          origins: "Reynolds described dream pop bands as `a wave of hazy neo-psychedelic groups`, noting the influence of the `ethereal soundscapes` of bands such as Cocteau Twins.[3] Rolling Stone's Kory Grow described `modern dream pop` as originating with the early 1980s work of Cocteau Twins and their contemporaries",
          img: "https://d1llvcsapfiksz.cloudfront.net/vendors/samplephonics/wonky-dream-pop/images/WonkyDreamPop_desktop.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Noise Pop", 
          history: "Noise pop has been described by AllMusic as `the halfway point between bubblegum and the avant-garde`.",
          oneLineDescr: "Noise pop is a subgenre of alternative or indie rock that developed in the mid-1980s in the United Kingdom and United States.",
          characteristics: "It is defined by its mixture of dissonant noise or feedback with the songcraft more often found in pop music.[1] Shoegazing, another noise-based genre that developed in the 1980s, drew from noise pop.",
          origins: "Early American alternative rock bands like Sonic Youth, Yo La Tengo and Dinosaur Jr.",
          img: "https://d2oet5a29f64lj.cloudfront.net/IMAGES/album/600/XCD391.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Grunge", 
          history: "The early grunge movement revolved around Seattle's independent record label Sub Pop and the region's underground music scene. ",
          oneLineDescr: "Grunge (sometimes referred to as the Seattle sound) is a rock music genre and subculture that emerged during the mid-1980s in the Pacific Northwest U.S. state of Washington, particularly in Seattle and nearby towns. ",
          characteristics: "Grunge was commercially successful in the early to mid-1990s, due to releases such as Nirvana's Nevermind, Pearl Jam's Ten, Soundgarden's Badmotorfinger, Alice in Chains' Dirt and Stone Temple Pilots' Core.",
          origins: "The owners of Sub Pop marketed Northwestern punk rock shrewdly and the media was encouraged to describe it as `grunge`, which came to mean a punk and metal hybrid style of music.[6] By the early 1990s, its popularity had spread, with grunge bands appearing in California, then emerging in other parts of the United States and in Australia, building strong followings and signing major record deals.",
          img: "https://d1wtzzt4oxg683.cloudfront.net/images/covers/originals_optimised/167/89667.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shoegazing", 
          history: "Shoegazing (or shoegaze, initially known as `dream pop`) is a subgenre of indie and alternative rock that emerged in the United Kingdom in the late 1980s.",
          oneLineDescr: "Shoegazing combines ethereal, swirling vocals with layers of distorted, bent, flanged guitars,[6] creating a wash of sound where no instrument is distinguishable from another.",
          characteristics: "It is characterized by its ethereal-sounding mixture of obscured vocals, guitar distortion and effects, feedback, and overwhelming volume",
          origins: "Most shoegazing artists drew from the glide guitar template set by My Bloody Valentine on their early EPs and album Isn't Anything from the late 1980s",
          img: "https://cdn4.pitchfork.com/albums/24030/homepage_large.40675dc0.jpg",
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
