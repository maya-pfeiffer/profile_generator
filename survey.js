const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable ", (name) => {
  console.log(`My name is ${name}!`);

  rl.question("What's an activity you like doing? ", (activity) => {
    console.log(`I enjoy ${activity}!`);

    rl.question("What's your favourite type of music? ", (music) => {
      console.log(`I enjoy listening to ${music} music!`);

      rl.question("What's your favourite cuisine? ", (cuisine) => {
        console.log(`I love eating ${cuisine} food!`);

        rl.question("Where is your favourite place to travel? ", (location) => {
          console.log(`I enjoy travelling to ${location}!`);

          rl.question("Which sport is your absolute favourite? ", (sport) => {
            console.log(`I love ${sport}!`);

            rl.question("What is your superpower? In a few words, tell us why you're amazing at it ", (superpower) => {
              console.log(`I am great at ${superpower}!`);

    rl.close();
            });
          });
        });
      });
    });
  });
});