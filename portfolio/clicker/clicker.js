// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

  // content variables
  const description =
    "The development process for the engaging clicker button game involved evaluating and selecting the top 10 ideas out of 40. The \"Monkey Poop War\" concept, though unique, was considered too complex. The \"Clicker Game\" stood out for its simplicity and creative potential. Other ideas included bird-viewing, color combinations, and expression-changing applications.\n\nThe top contenders were \"Monkey Poop War,\" \"Clicker Game,\" \"Bird Sounds,\" \"Color Changing Game,\" and \"Expression Changing.\" Sketches for the color mixing game showed creativity but faced limitations. The monkey poop game offered complexity but was ultimately set aside due to logistical challenges. The bird-viewing application needed further depth.\n\nThe process highlighted the need for an idea balancing uniqueness and feasibility. The clicker game emerged as a promising choice, with Thet's implementation adding innovative elements like a metronome and various game modes to improve hand-eye coordination and reflexes.\n\nThe resulting clicker game is designed to enhance hand-eye coordination and reflex responses in a fun and interactive manner. It offers diverse modes including 'Normal Mode' for classic clicking, 'Color Mode' for visual stimulation, and 'Animal Mode' for both entertainment and education. With these options, players can tailor their experience, ensuring hours of entertainment and skill-building.";
  const concept = "We created a tier list of our top 40 ideas so that it is easy to rate them, our tier list ranged from (S) to (D), where (S) represents the top of the tier list and (D) represents the bottom-most tier. This made the sorting easier, making us consider only the top 10 ideas. Following are those top 10 ideas.";
  const conceptSummary =
    "After making this tier list, we were left with 10 ideas to consider, although all these 10 ideas were worth considering monkey poop war, clicker game, bird sounds, color changing game, and expression changing, were some of our top ideas to consider from. Other than these 10 ideas there were many influential and great ideas that could have been considered, but we unfortunately had to stop working on them due to the time constraints.";
  const detailed = "From all of this implementation, it was revealed that some ideas like the color theory game, and bird sounds application were simple and easy to pursue but they lacked creativity while on the other hand games like the monkey poop game were fun and unique but a bit intimidating to approach. Overall it felt like there was a need for an idea that provided us a middle ground for uniqueness and approachability. "
  const videoEmbed = "description of the video here";

  // populate content from JavaScript variables
  document.getElementById("description").innerText = description;
  document.getElementById("concept").innerText = concept;
  document.getElementById("conceptSummary").innerText = conceptSummary;
  document.getElementById("detailed").innerText = detailed;

  // slides for concept sketches carousel
  const conceptSketches = [
    {
      imageSrc: 'img/10ideas/monkey-poop-war.jpg',
      title: 'Monkey Poop War',
      description: 'Monkey poop war was a part of our top 1 ideas, this is a game where there are two monkeys facing each other and they throw poop at each, which consequently has to be dodged by the opposite monkey. It was made by Logan, we chose this as the best idea because not only is it unique but also it is fun and educational. It is good for the development of hand-eye coordination. This idea was eventually not chosen to go further because it seemed a bit too complicated and maybe not as unique.'
    },
    {
      imageSrc: 'img/10ideas/clicker-game.jpg',
      title: 'Clicker Game',
      description: 'The second idea, or the first on (A) tier is a clicker game. This idea was made by Htet, some of the great features of this application are that it is quite unique and it teaches kids to work fast. This application was also one of our priorities because it has a lot of room for more creativity since it is a very simple and basic application. The downside of this application for this project could be that it is not as interesting as some of our other ideas.'
    },
    {
      imageSrc: 'img/10ideas/bird-sounds.jpg',
      title: 'Bird Sounds App',
      description: 'This idea also belongs to the (A) tier, this idea belonged to Heer. In this application, the user can view birds of different species from all around the world and see what they sound like. They can also view fun facts and important information about the birds. Some of the pros of this application were that it was something new, and a lot more educational than some of our other ideas. But the idea itself was a bit limiting and there was not much room for creativity.'
    },
    {
      imageSrc: 'img/10ideas/color-mix.jpg',
      title: 'Color Mix Learning Game',
      description: 'This idea was also a part of the (A) tier, and it was Logan’s idea. This application is a game where the participants can learn how to create different color combinations using the primary color. This might not seem that unique at first glance but it is pretty creative. It is also a fun way for the participants to learn about new colors and their usage.'
    },
    {
      imageSrc: 'img/10ideas/expressions-game.jpg',
      title: 'Expressions Game',
      description: 'This idea was a part of the tier list (A), it was made by Logan. In this application, participants can pull down the level where a curtain can be pulled in front of the face on the screen whereby the expression changes, it could be useful to teach young kids about different emotions and expressions. It was a unique and interesting idea but there seemed to be little room for development and creativity.'
    },
    {
      imageSrc: 'img/10ideas/dressup-game.jpg',
      title: 'Dress-up Game',
      description: 'This application idea is a part of our tear list (A), it was created by Logan. This is something like a dress up game where a person can change their hardstyle. The idea itself was pretty fun but it did not seem unique when compared to all the existing applications such as dressup games and such.'
    },
    {
      imageSrc: 'img/10ideas/pet-care.jpg',
      title: 'Pet Care Simulator',
      description: 'This application idea was introduced by Htet, and it is a part of the (A) tier list. Using this application users can adopt a pet, and they can they can take care of their pets. This not only teaches the participants how to take care of someone but it is also really fun and interesting. Although there is a lot of room for creativity, it can be argued that it is not as unique.'
    },
    {
      imageSrc: 'img/10ideas/story-visualizer.jpg',
      title: 'Story Visualizer',
      description: 'This application idea was created by Htet, it is a story visualization and is a part of our tier (A). In this idea, the participants can read and see stories happening along with picking their own storyline. They can be a part of changing the flow of how the plot goes. This can be a really good application as it teaches the participants how stories can be created, which can help them be more creative. Although this seemed like a good idea, it might not have been the most unique and creative.'
    },
    {
      imageSrc: 'img/10ideas/typing-game.jpg',
      title: 'Typing Challenge Game',
      description: 'This was a typing game and it was created by Htet, this is a part of our tier group (A). In this game, the users can learn how to type, while a timer is going on. It is quite educational but it doesn’t seem to show any form of creativity and uniqueness. Therefore we had to rule it out from our future portfolio.'
    },
    {
      imageSrc: 'img/10ideas/outfit-game.jpg',
      title: 'Outfit Matching Game',
      description: 'This outfit game was a part of Htet’s ideas, It is a part of the (A) tier list. This application was an outfit game where users could put outfits on and match them, organise them. Although this seems to be pretty fun it is not unique. It would have been a fun application to work on but there are many other platforms offering such games.'
    }
  ];

  // slides for detailed sketches carousel
  const detailedSketches = [
    // 1
    {
      imageSrc: 'img/10concepts/color-mix-sketches-kai.jpg',
      title: 'Color Mixing Game Sketches - Kai',
      description: 'These sketches belong to the color mixing game, these sketches were created by Kai. This shows the flow of how the users can pick the secondary-complementary, primary-tertiary colors and can see how they mix to become one of the colors in the color wheel. One of the pros of this implementation was that it was clear and condensed, it made learning colors fun and interesting but this implementation also helps us highlight that this application can be a bit limiting in terms of creativity.'
    },
    // 2
    {
      imageSrc: 'img/10concepts/color-mix-sketches1.jpg',
      title: 'Color Mixing Game Sketches - Logan',
      description: 'This set of implementations for the color mixing game were created by Logan. Logans attempts to come up with a lot of different ways to portray the idea, it almost makes the process itself pretty fun and interesting. Although he was able to come up with many different scenarios to mix and add colors we had to eventually rule it out because it was limiting.'
    },
    {
      imageSrc: 'img/10concepts/color-mix-sketches2.jpg',
      title: 'Color Mixing Game Sketches - Logan',
      description: 'This set of implementations for the color mixing game were created by Logan. Logans attempts to come up with a lot of different ways to portray the idea, it almost makes the process itself pretty fun and interesting. Although he was able to come up with many different scenarios to mix and add colors we had to eventually rule it out because it was limiting.'
    },
    {
      imageSrc: 'img/10concepts/color-mix-sketches3.jpg',
      title: 'Color Mixing Game Sketches - Logan',
      description: 'This set of implementations for the color mixing game were created by Logan. Logans attempts to come up with a lot of different ways to portray the idea, it almost makes the process itself pretty fun and interesting. Although he was able to come up with many different scenarios to mix and add colors we had to eventually rule it out because it was limiting.'
    },
    // 3
    {
      imageSrc: 'img/10concepts/monkey-poop-war-sketches1.jpg',
      title: 'Monkey Poop War Sketches - Htet',
      description: 'These sketches for the monkey poop game were created by Htet, there are many different progressions introduced by Htet for the scenarios of the game. All of them can be explored as you scroll through the next slides. These implementations reveal how this game can either be played with a user on a touch screen device or through a computer or a machine. It also reveals how the game seems to get more complex, which shows that it has a lot of room for creativity. Different lanes are added to make the game more interesting and hard to play, and the players can also participate in standoffs! Eventually, it was decided to not pursue this idea as it revealed a lot of loopholes that would have been hard to carry on with within 1 week of conception.'
    },
    {
      imageSrc: 'img/10concepts/monkey-poop-war-sketches2.jpg',
      title: 'Monkey Poop War Sketches - Htet',
      description: 'These sketches for the monkey poop game were created by Htet, there are many different progressions introduced by Htet for the scenarios of the game. All of them can be explored as you scroll through the next slides. These implementations reveal how this game can either be played with a user on a touch screen device or through a computer or a machine. It also reveals how the game seems to get more complex, which shows that it has a lot of room for creativity. Different lanes are added to make the game more interesting and hard to play, and the players can also participate in standoffs! Eventually, it was decided to not pursue this idea as it revealed a lot of loopholes that would have been hard to carry on with within 1 week of conception.'
    },
    {
      imageSrc: 'img/10concepts/monkey-poop-war-sketches3.jpg',
      title: 'Monkey Poop War Sketches - Htet',
      description: 'These sketches for the monkey poop game were created by Htet, there are many different progressions introduced by Htet for the scenarios of the game. All of them can be explored as you scroll through the next slides. These implementations reveal how this game can either be played with a user on a touch screen device or through a computer or a machine. It also reveals how the game seems to get more complex, which shows that it has a lot of room for creativity. Different lanes are added to make the game more interesting and hard to play, and the players can also participate in standoffs! Eventually, it was decided to not pursue this idea as it revealed a lot of loopholes that would have been hard to carry on with within 1 week of conception.'
    },
    {
      imageSrc: 'img/10concepts/monkey-poop-war-sketches4.jpg',
      title: 'Monkey Poop War Sketches - Htet',
      description: 'These sketches for the monkey poop game were created by Htet, there are many different progressions introduced by Htet for the scenarios of the game. All of them can be explored as you scroll through the next slides. These implementations reveal how this game can either be played with a user on a touch screen device or through a computer or a machine. It also reveals how the game seems to get more complex, which shows that it has a lot of room for creativity. Different lanes are added to make the game more interesting and hard to play, and the players can also participate in standoffs! Eventually, it was decided to not pursue this idea as it revealed a lot of loopholes that would have been hard to carry on with within 1 week of conception.'
    },
    {
      imageSrc: 'img/10concepts/monkey-poop-war-sketches5.jpg',
      title: 'Monkey Poop War Sketches - Htet',
      description: 'These sketches for the monkey poop game were created by Htet, there are many different progressions introduced by Htet for the scenarios of the game. All of them can be explored as you scroll through the next slides. These implementations reveal how this game can either be played with a user on a touch screen device or through a computer or a machine. It also reveals how the game seems to get more complex, which shows that it has a lot of room for creativity. Different lanes are added to make the game more interesting and hard to play, and the players can also participate in standoffs! Eventually, it was decided to not pursue this idea as it revealed a lot of loopholes that would have been hard to carry on with within 1 week of conception.'
    },
    // 4
    {
      imageSrc: 'img/10concepts/bird-sounds-sketches1.jpg',
      title: 'Bird Sounds App Sketches - Heer',
      description: 'This is one of our final ideas, the implementation was created by Heer. As depicted, it shows how the user can learn about different birds, and they also had access to a view of a world map and different badges and rewards to add to their profile. The implementation seemed to be pretty easy to implement but it seemed like it lacked depth to be considered in the future; there were a lot of elements which were limiting and hindered our future creativity.'
    },
    {
      imageSrc: 'img/10concepts/bird-sounds-sketches2.jpg',
      title: 'Bird Sounds App Sketches - Heer',
      description: 'This is one of our final ideas, the implementation was created by Heer. As depicted, it shows how the user can learn about different birds, and they also had access to a view of a world map and different badges and rewards to add to their profile. The implementation seemed to be pretty easy to implement but it seemed like it lacked depth to be considered in the future; there were a lot of elements which were limiting and hindered our future creativity.'
    }
  ];

  // slides for final sketches carousel
  const finalSketches = [
    // 1
    {
      imageSrc: 'img/final/final-ideas-sketches-kai.jpg',
      title: 'Final Idea - Kai',
      description: 'This was the implementation idea created by Kai for the clicker game, this implementation helped us reveal that even though the clicker game was simple and ingenious it has a lot of room for creativity. It was fun to see how a lot of different elements like animals, hazards, and colors can be introduced to not only make the game more creative but also help the users learn a lot of new things in the process.'
    },
    // 2
    {
      imageSrc: 'img/final/final-ideas-sketches-htet1.jpg',
      title: 'Final Idea - Htet',
      description: 'This implementation for the clicker game was created by Htet, Htet introduced ideas like the metronome, fish clicker, mole game, and mole buttons which made the game more interesting than it seemed at first glance. This implementation helped us set the game apart from the rest of the top-chosen applications. It is also further shown how the clicker can be made smaller to make it more challenging, it addresses the theme of hand-eye coordination and making the participants better at their reflexes. '
    },
    {
      imageSrc: 'img/final/final-ideas-sketches-htet2.jpg',
      title: 'Final Idea - Htet',
      description: 'This implementation for the clicker game was created by Htet, Htet introduced ideas like the metronome, fish clicker, mole game, and mole buttons which made the game more interesting than it seemed at first glance. This implementation helped us set the game apart from the rest of the top-chosen applications. It is also further shown how the clicker can be made smaller to make it more challenging, it addresses the theme of hand-eye coordination and making the participants better at their reflexes. '
    },
    {
      imageSrc: 'img/final/final-ideas-sketches-htet3.jpg',
      title: 'Final Idea - Htet',
      description: 'This implementation for the clicker game was created by Htet, Htet introduced ideas like the metronome, fish clicker, mole game, and mole buttons which made the game more interesting than it seemed at first glance. This implementation helped us set the game apart from the rest of the top-chosen applications. It is also further shown how the clicker can be made smaller to make it more challenging, it addresses the theme of hand-eye coordination and making the participants better at their reflexes. '
    },
    {
      imageSrc: 'img/final/final-ideas-sketches-htet4.jpg',
      title: 'Final Idea - Htet',
      description: 'This implementation for the clicker game was created by Htet, Htet introduced ideas like the metronome, fish clicker, mole game, and mole buttons which made the game more interesting than it seemed at first glance. This implementation helped us set the game apart from the rest of the top-chosen applications. It is also further shown how the clicker can be made smaller to make it more challenging, it addresses the theme of hand-eye coordination and making the participants better at their reflexes. '
    },
    {
      imageSrc: 'img/final/final-ideas-sketches-htet5.jpg',
      title: 'Final Idea - Htet',
      description: 'This implementation for the clicker game was created by Htet, Htet introduced ideas like the metronome, fish clicker, mole game, and mole buttons which made the game more interesting than it seemed at first glance. This implementation helped us set the game apart from the rest of the top-chosen applications. It is also further shown how the clicker can be made smaller to make it more challenging, it addresses the theme of hand-eye coordination and making the participants better at their reflexes. '
    }
  ];

  createCarousel('carouselExampleIndicators1', conceptSketches);
  createCarousel('carouselExampleIndicators2', detailedSketches);
  createCarousel('carouselExampleIndicators3', finalSketches);


  // Get the modal element
  const modal = document.getElementById('myModal');

  // Get the close button element
  const closeButton = document.getElementsByClassName('close')[0];

  // Close the modal when the close button is clicked
  closeButton.addEventListener('click', closeModal);

  // Close the modal when the user clicks outside of it
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Close the modal when the "Esc" key is pressed
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

});


// Function to open the modal
function openModal(slide) {
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');

  modalImage.src = slide.imageSrc;
  modalTitle.textContent = slide.title;
  modalDescription.textContent = slide.description;

  document.getElementById('myModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// Function to create a carousel
function createCarousel(containerId, slides) {
  // Get the container element
  const carouselDiv = document.getElementById(containerId);

  // Create ol element for indicators
  const ol = document.createElement('ol');
  ol.classList.add('carousel-indicators');

  // Create div element for inner carousel content
  const innerDiv = document.createElement('div');
  innerDiv.classList.add('carousel-inner');

  // Create prev and next buttons
  const prevButton = document.createElement('a');
  prevButton.classList.add('carousel-control-prev');
  prevButton.href = `#${containerId}`;
  prevButton.role = 'button';
  prevButton.setAttribute('data-slide', 'prev');
  prevButton.innerHTML = '<span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span>';

  const nextButton = document.createElement('a');
  nextButton.classList.add('carousel-control-next');
  nextButton.href = `#${containerId}`;
  nextButton.role = 'button';
  nextButton.setAttribute('data-slide', 'next');
  nextButton.innerHTML = '<span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span>';

  // Append ol, innerDiv, and buttons to the carouselDiv
  carouselDiv.appendChild(ol);
  carouselDiv.appendChild(innerDiv);
  carouselDiv.appendChild(prevButton);
  carouselDiv.appendChild(nextButton);

  // carousel indicators container
  const carouselIndicators = ol;
  // carousel inner container
  const carouselInner = innerDiv;
  // Loop through the slides and create carousel items dynamically
  slides.forEach((slide, index) => {

    // Create the indicators
    const indicator = document.createElement('li');
    indicator.setAttribute('data-target', `#${containerId}`);
    indicator.setAttribute('data-slide-to', index);
    if (index === 0) {
      indicator.classList.add('active'); // Set the first indicator as active
    }
    carouselIndicators.appendChild(indicator);

    // Create the carousel items
    const item = document.createElement('div');
    item.classList.add('carousel-item');
    if (index === 0) {
      item.classList.add('active'); // Set the first slide as active
    }

    // Create the image element
    const img = document.createElement('img');
    img.classList.add('d-block', 'w-100');
    img.src = slide.imageSrc;
    img.alt = `Slide ${index + 1}`;

    // Add click event listener to open modal
    img.addEventListener('click', () => {
      openModal(slide);
    });

    // Create the caption div
    const caption = document.createElement('div');
    caption.classList.add('carousel-caption', 'd-none', 'd-md-block', 'bg-[#FCFCFC]');

    // Create the caption title and description
    const title = document.createElement('h5');
    title.classList.add('text-black', 'text-lg', 'sm:text-xl', 'font-medium');
    title.textContent = slide.title;
    const description = document.createElement('p');
    description.textContent = slide.description;
    description.classList.add('text-black', 'font-light');

    caption.appendChild(title);
    caption.appendChild(description);

    item.appendChild(img);
    item.appendChild(caption);

    carouselInner.appendChild(item);
  });
}
