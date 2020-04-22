"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

/**
 * - importing the User model here to seed data
 * - that way createdAt and updatedAt are added for us
 */

const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * using User.upsert & Promise.all to create users
     *
     * why:
     *
     * - allows us to run "npx sequelize-cli db:seed:all" multiple times
     * - without having to drop the database
     * - it also allows us to harcode the email and id we want
     * - we can now use these ids to seed related data in other seed files
     *
     * how .upsert works
     * - if a user with this email and id doesn't exist: create it
     * - if a user with this email and id does exist: update that user
     * - since we want to create multiple users this way we use Promise.all
     *
     * if you still get a: "ERROR: Validation error", while running this seed
     * - you might have a user with a different id that you're trying to give the same email
     * - you might have a user with a different email that you're trying to assign the same id
     *
     * how to solve the above error:
     *
     * - make sure the combination of id and email in this file are unique
     * - get rid of any duplicates by dropping the db, creating it again, migrating and seeding
     *
     * You can do this using:
     * npx sequelize-cli db:drop
     * npm run initdev (creates db, migrates & seeds)
     *
     */
    const users = await Promise.all([
      User.upsert({
        id: 1,
        name: "testuser",
        email: "test@test.com",
        password: bcrypt.hashSync("test1234", SALT_ROUNDS), 
        about: "I am a social media and power blogging. I travel 365 days to my choice of places around the world. I am in love with music and write my own music blog.", 
        music: "I don’t really have a favourite type of music and what I listen to often depends on my mood. I like classical, hard rock, metal, folk - it’s not so much about the genre as the fact that I like certain songs and I do have a preference for certain instruments. I love slide guitar, blues harmonica, etc. I also tend to like certain bands or musicians - I’m heavily into Joe Bonamassa right now.",  
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1hiq1aub874A5VDJOr7CmMzs-L3Y959yEeeEaeqwxK3a46O3V&usqp=CAU", 
        isAdmin: "false"
      }),
      User.upsert({
        id: 2,
        name: "dummy",
        email: "dummy@dummy.com",
        password: bcrypt.hashSync("dummy1234", SALT_ROUNDS), 
        about: "Madison is fueled by her passion for understanding the nuances of cross-cultural advertising. She considers herself a ‘forever student,’ eager to both build on her academic foundations in psychology and sociology and stay in tune with the latest digital marketing strategies through continued coursework and professional development.", 
        music: "I like and am drawn to all kinds of music, jazz, rock, pop, country, classical anything as long as it is good.  I admit to being drawn to works of great cultural and historical significance and import and works that show the evolution of music as an art form.  But I still have to feel it emotionally.  It doesn't matter how may experts tell me how brilliant Mozart or Bob Dylan were or are, if I did nor feel them viscerally, I would not waste my time.  Life is too short. ",  
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-yKMe8PXZn3heDgmAD-HRS087HqAqgskuUGmkUowtHYiu3niA&usqp=CAU", 
        isAdmin: "true"
      }), 
      User.upsert({
        id: 3,
        name: "zorana",
        email: "zorana@zorana.com",
        password: bcrypt.hashSync("text1234", SALT_ROUNDS), 
        about: "Madison Blackstone is a director of brand marketing, with experience managing global teams and multi-million-dollar campaigns. Her background in brand strategy, visual design, and account management inform her mindful but competitive approach.", 
        music: "That's such a huge question. If I had to pick my favorite genre, it would have to be Pop. However, if you look at my iPod I have literally everything on there. From rock to pop to country to folk to jazz to broadway. When I listen to music, I don't think of the genre or who's singing it. I just listen. If I like it, I like it. I really don't base my taste of it on anything other than what I'm hearing. I love music that speaks to me on an emotional level. If I get goosebumps listening to a song, then that's a pretty good song. If I have any reaction, physical or mental, to a song, that song sticks with me for a long time and I don't forget it.",  
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5c4Pnd2pQggyf63hDbnj9t56xuXkqwseWhBBl5sBlLoC-91q8&usqp=CAU", 
        isAdmin: "false"
      }), 

      
    ]);

    console.log(`SEEDED: ${users.length} users`);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
