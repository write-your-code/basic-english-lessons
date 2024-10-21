const tensesArray = [
  {
    question: "I need to wake up early tomorrow.",
    options: {
      a: "I woke up early tomorrow.",
      b: "I am waking up early tomorrow.",
      c: "I need to wake up early tomorrow.", // Correct answer
      d: "I have woken up early tomorrow.",
    },
    answer: "c",
    explanation:
      "This sentence uses the present tense 'need' to express a future action, implying an obligation to wake up early in the future (tomorrow).",
  },
  {
    question: "The movie was better than the book.",
    options: {
      a: "The movie was better than the book.", // Correct answer
      b: "The movie is better than the book.",
      c: "The movie will be better than the book.",
      d: "The movie had been better than the book.",
    },
    answer: "a",
    explanation:
      "This sentence uses the simple past tense 'was' to compare the movie and the book, indicating that this comparison took place in the past.",
  },
  {
    question: "I will call you when I arrive.",
    options: {
      a: "I call you when I arrive.",
      b: "I will call you when I arrive.", // Correct answer
      c: "I had called you when I arrived.",
      d: "I am calling you when I arrive.",
    },
    answer: "b",
    explanation:
      "This sentence uses the future tense 'will call' to describe an action that will happen in the future when the person arrives.",
  },
  {
    question: "I enjoy watching the sunset.",
    options: {
      a: "I enjoyed watching the sunset.",
      b: "I am watching the sunset.",
      c: "I enjoy watching the sunset.", // Correct answer
      d: "I have enjoyed watching the sunset.",
    },
    answer: "c",
    explanation:
      "This sentence uses the present tense 'enjoy' to express a current habit or preference of watching the sunset.",
  },
  {
    question: "I lost my wallet at the mall.",
    options: {
      a: "I am losing my wallet at the mall.",
      b: "I lost my wallet at the mall.", // Correct answer
      c: "I have lost my wallet at the mall.",
      d: "I lose my wallet at the mall.",
    },
    answer: "b",
    explanation:
      "The sentence uses the simple past tense 'lost' to describe an event that happened at a specific time in the past.",
  },
  {
    question: "Can you recommend a good restaurant nearby?",
    options: {
      a: "Can you recommended a good restaurant nearby?",
      b: "Can you recommends a good restaurant nearby?",
      c: "Can you recommend a good restaurant nearby?", // Correct answer
      d: "Can you recommending a good restaurant nearby?",
    },
    answer: "c",
    explanation:
      "The sentence uses the base form of the verb 'recommend' after the modal verb 'can' to ask for a suggestion.",
  },
  {
    question: "I will finish this project by tomorrow.",
    options: {
      a: "I finished this project by tomorrow.",
      b: "I am finishing this project by tomorrow.",
      c: "I will finish this project by tomorrow.", // Correct answer
      d: "I had finished this project by tomorrow.",
    },
    answer: "c",
    explanation:
      "This sentence uses the future tense 'will finish' to describe an action that will be completed by a specific time in the future (tomorrow).",
  },
  {
    question: "I forgot to send the email.",
    options: {
      a: "I have forgotten to send the email.",
      b: "I forgot to send the email.", // Correct answer
      c: "I am forgetting to send the email.",
      d: "I will forget to send the email.",
    },
    answer: "b",
    explanation:
      "The sentence uses the simple past tense 'forgot' to describe something that happened in the past, indicating that the email wasn't sent.",
  },
  {
    question: "The sunset was beautiful yesterday.",
    options: {
      a: "The sunset will be beautiful yesterday.",
      b: "The sunset is beautiful yesterday.",
      c: "The sunset was beautiful yesterday.", // Correct answer
      d: "The sunset had been beautiful yesterday.",
    },
    answer: "c",
    explanation:
      "The sentence uses the past tense 'was' to describe the beauty of the sunset on a specific day in the past (yesterday).",
  },
  {
    question: "I need to book a flight.",
    options: {
      a: "I need to book a flight.", // Correct answer
      b: "I needed to book a flight.",
      c: "I have to book a flight.",
      d: "I will be booking a flight.",
    },
    answer: "a",
    explanation:
      "This sentence uses the present tense 'need' to express an immediate necessity to book a flight.",
  },

  {
    question: "I need to wake up early tomorrow.",
    options: {
      a: "I woke up early tomorrow.",
      b: "I am waking up early tomorrow.",
      c: "I need to wake up early tomorrow.", // Correct answer
      d: "I have woken up early tomorrow.",
    },
    answer: "c",
    explanation:
      "This sentence uses the present tense 'need' to express a future action, implying an obligation to wake up early in the future (tomorrow).",
  },
  {
    question: "The movie was better than the book.",
    options: {
      a: "The movie was better than the book.", // Correct answer
      b: "The movie is better than the book.",
      c: "The movie will be better than the book.",
      d: "The movie had been better than the book.",
    },
    answer: "a",
    explanation:
      "This sentence uses the simple past tense 'was' to compare the movie and the book, indicating that this comparison took place in the past.",
  },
  {
    question: "I will call you when I arrive.",
    options: {
      a: "I call you when I arrive.",
      b: "I will call you when I arrive.", // Correct answer
      c: "I had called you when I arrived.",
      d: "I am calling you when I arrive.",
    },
    answer: "b",
    explanation:
      "This sentence uses the future tense 'will call' to describe an action that will happen in the future when the person arrives.",
  },
  {
    question: "I enjoy watching the sunset.",
    options: {
      a: "I enjoyed watching the sunset.",
      b: "I am watching the sunset.",
      c: "I enjoy watching the sunset.", // Correct answer
      d: "I have enjoyed watching the sunset.",
    },
    answer: "c",
    explanation:
      "This sentence uses the present tense 'enjoy' to express a current habit or preference of watching the sunset.",
  },
  {
    question: "I lost my wallet at the mall.",
    options: {
      a: "I am losing my wallet at the mall.",
      b: "I lost my wallet at the mall.", // Correct answer
      c: "I have lost my wallet at the mall.",
      d: "I lose my wallet at the mall.",
    },
    answer: "b",
    explanation:
      "The sentence uses the simple past tense 'lost' to describe an event that happened at a specific time in the past.",
  },
  {
    question: "Can you recommend a good restaurant nearby?",
    options: {
      a: "Can you recommended a good restaurant nearby?",
      b: "Can you recommends a good restaurant nearby?",
      c: "Can you recommend a good restaurant nearby?", // Correct answer
      d: "Can you recommending a good restaurant nearby?",
    },
    answer: "c",
    explanation:
      "The sentence uses the base form of the verb 'recommend' after the modal verb 'can' to ask for a suggestion.",
  },
  {
    question: "I will finish this project by tomorrow.",
    options: {
      a: "I finished this project by tomorrow.",
      b: "I am finishing this project by tomorrow.",
      c: "I will finish this project by tomorrow.", // Correct answer
      d: "I had finished this project by tomorrow.",
    },
    answer: "c",
    explanation:
      "This sentence uses the future tense 'will finish' to describe an action that will be completed by a specific time in the future (tomorrow).",
  },
  {
    question: "I forgot to send the email.",
    options: {
      a: "I have forgotten to send the email.",
      b: "I forgot to send the email.", // Correct answer
      c: "I am forgetting to send the email.",
      d: "I will forget to send the email.",
    },
    answer: "b",
    explanation:
      "The sentence uses the simple past tense 'forgot' to describe something that happened in the past, indicating that the email wasn't sent.",
  },
  {
    question: "The sunset was beautiful yesterday.",
    options: {
      a: "The sunset will be beautiful yesterday.",
      b: "The sunset is beautiful yesterday.",
      c: "The sunset was beautiful yesterday.", // Correct answer
      d: "The sunset had been beautiful yesterday.",
    },
    answer: "c",
    explanation:
      "The sentence uses the past tense 'was' to describe the beauty of the sunset on a specific day in the past (yesterday).",
  },
  {
    question: "I need to book a flight.",
    options: {
      a: "I need to book a flight.", // Correct answer
      b: "I needed to book a flight.",
      c: "I have to book a flight.",
      d: "I will be booking a flight.",
    },
    answer: "a",
    explanation:
      "This sentence uses the present tense 'need' to express an immediate necessity to book a flight.",
  },
  {
    question: "He will have been working here for ten years by next month.",
    options: {
      a: "He will have worked here for ten years by next month.",
      b: "He will have been working here for ten years by next month.", // Correct answer
      c: "He had been working here for ten years by next month.",
      d: "He has worked here for ten years by next month.",
    },
    answer: "b",
    explanation:
      "The future perfect continuous tense 'will have been working' is used to describe an action that will be ongoing and completed at a specific time in the future.",
  },
  {
    question: "They have been playing soccer for two hours.",
    options: {
      a: "They have been playing soccer for two hours.", // Correct answer
      b: "They are playing soccer for two hours.",
      c: "They had played soccer for two hours.",
      d: "They will play soccer for two hours.",
    },
    answer: "a",
    explanation:
      "The present perfect continuous tense 'have been playing' describes an action that started in the past and is still ongoing.",
  },
  {
    question: "She had already left when I arrived.",
    options: {
      a: "She had already left when I arrived.", // Correct answer
      b: "She has already left when I arrived.",
      c: "She was leaving when I arrived.",
      d: "She will have left when I arrived.",
    },
    answer: "a",
    explanation:
      "The past perfect tense 'had left' indicates that one action (leaving) was completed before another action (arriving).",
  },
  {
    question: "I will be cooking dinner at 7 PM.",
    options: {
      a: "I was cooking dinner at 7 PM.",
      b: "I will be cooking dinner at 7 PM.", // Correct answer
      c: "I had been cooking dinner at 7 PM.",
      d: "I will have cooked dinner at 7 PM.",
    },
    answer: "b",
    explanation:
      "The future continuous tense 'will be cooking' is used to describe an action that will be happening at a specific time in the future.",
  },
  {
    question: "We were playing chess when the power went out.",
    options: {
      a: "We were playing chess when the power went out.", // Correct answer
      b: "We are playing chess when the power went out.",
      c: "We have been playing chess when the power went out.",
      d: "We will be playing chess when the power went out.",
    },
    answer: "a",
    explanation:
      "The past continuous tense 'were playing' is used to describe an action that was interrupted by another action in the past.",
  },
  {
    question: "He has already eaten dinner.",
    options: {
      a: "He is already eating dinner.",
      b: "He has already eaten dinner.", // Correct answer
      c: "He had already eaten dinner.",
      d: "He will have already eaten dinner.",
    },
    answer: "b",
    explanation:
      "The present perfect tense 'has eaten' indicates that the action (eating dinner) was completed before now, with relevance to the present.",
  },
  {
    question: "I am not going to the party tonight.",
    options: {
      a: "I was not going to the party tonight.",
      b: "I am not going to the party tonight.", // Correct answer
      c: "I had not gone to the party tonight.",
      d: "I will not go to the party tonight.",
    },
    answer: "b",
    explanation:
      "The present continuous 'am not going' is used to describe an action that is planned or ongoing in the present (tonight).",
  },
  {
    question: "They will have completed the project by the end of the week.",
    options: {
      a: "They have completed the project by the end of the week.",
      b: "They will be completing the project by the end of the week.",
      c: "They will have completed the project by the end of the week.", // Correct answer
      d: "They had completed the project by the end of the week.",
    },
    answer: "c",
    explanation:
      "The future perfect tense 'will have completed' is used to describe an action that will be finished before a certain point in the future.",
  },
  {
    question: "I had been studying for hours before the test began.",
    options: {
      a: "I have been studying for hours before the test began.",
      b: "I had been studying for hours before the test began.", // Correct answer
      c: "I will have studied for hours before the test began.",
      d: "I was studying for hours before the test began.",
    },
    answer: "b",
    explanation:
      "The past perfect continuous 'had been studying' is used to describe an action that was ongoing and completed before another action (the test beginning).",
  },
  {
    question: "She is going to visit her grandmother next weekend.",
    options: {
      a: "She will visit her grandmother next weekend.",
      b: "She is visiting her grandmother next weekend.",
      c: "She is going to visit her grandmother next weekend.", // Correct answer
      d: "She was going to visit her grandmother next weekend.",
    },
    answer: "c",
    explanation:
      "The 'going to' future tense is used to indicate a planned event in the near future.",
  },
  {
    question:
      "We had been living in Paris for three years before we moved to London.",
    options: {
      a: "We have been living in Paris for three years before we moved to London.",
      b: "We will have been living in Paris for three years before we moved to London.",
      c: "We had been living in Paris for three years before we moved to London.", // Correct answer
      d: "We are living in Paris for three years before we moved to London.",
    },
    answer: "c",
    explanation:
      "The past perfect continuous 'had been living' describes an ongoing action that was completed before another action (moving to London).",
  },
  {
    question: "He was reading a book when I entered the room.",
    options: {
      a: "He was reading a book when I entered the room.", // Correct answer
      b: "He is reading a book when I entered the room.",
      c: "He had read a book when I entered the room.",
      d: "He will be reading a book when I entered the room.",
    },
    answer: "a",
    explanation:
      "The past continuous 'was reading' is used to describe an action that was ongoing when another action occurred (entering the room).",
  },
  {
    question: "By next year, I will have been working here for five years.",
    options: {
      a: "By next year, I will work here for five years.",
      b: "By next year, I have worked here for five years.",
      c: "By next year, I will have been working here for five years.", // Correct answer
      d: "By next year, I will be working here for five years.",
    },
    answer: "c",
    explanation:
      "The future perfect continuous 'will have been working' describes an action that will be ongoing up until a specific time in the future (next year).",
  },
  {
    question: "I have been working on this project all day.",
    options: {
      a: "I am working on this project all day.",
      b: "I have been working on this project all day.", // Correct answer
      c: "I had worked on this project all day.",
      d: "I will be working on this project all day.",
    },
    answer: "b",
    explanation:
      "The present perfect continuous 'have been working' is used to describe an action that started in the past and is still ongoing.",
  },
  {
    question: "I will call you when I finish my work.",
    options: {
      a: "I called you when I finish my work.",
      b: "I will call you when I finish my work.", // Correct answer
      c: "I have called you when I finish my work.",
      d: "I call you when I finish my work.",
    },
    answer: "b",
    explanation:
      "The future tense 'will call' is used to describe an action that will happen after another action (finishing the work) in the future.",
  },
  {
    question: "She is learning to play the piano.",
    options: {
      a: "She is learning to play the piano.", // Correct answer
      b: "She was learning to play the piano.",
      c: "She has learned to play the piano.",
      d: "She had been learning to play the piano.",
    },
    answer: "a",
    explanation:
      "The present continuous 'is learning' is used to describe an action that is currently in progress.",
  },
];

const sentences = {
  simplePresent: [
    "I wake up at 6.00 a.m. every morning.",
    "She teaches English at a local school.",
    "They enjoy playing football on weekends.",
    "He works in a hospital as a nurse.",
    "The sun rises in the east.",
    "Dogs bark loudly when strangers approach.",
    "My father reads the newspaper daily.",
    "We live in a quiet neighbourhood.",
    "The earth revolves around the sun.",
    "She often visits her grandparents.",
    "The train departs at 9 a.m.",
    "He usually drinks tea for breakfast.",
    "It rains a lot during the monsoon season.",
    "My mum cooks delicious meals.",
    "Cats purr when they are content.",
    "They don't like spicy food.",
    "We attend the same school.",
    "The company opens for business at 8 a.m.",
    "Birds sing in the morning.",
    "I play tennis every Sunday.",
  ],
  presentContinuous: [
    "I am reading a book right now.",
    "She is cooking dinner for her family.",
    "They are playing basketball in the park.",
    "He is watching a movie at the cinema.",
    "We are studying for our final exams.",
    "The baby is sleeping in the crib.",
    "It is raining outside.",
    "She is working on a new project.",
    "They are eating lunch in the cafeteria.",
    "I am meeting a friend for coffee later.",
    "He is fixing his car in the garage.",
    "The kids are playing with their toys.",
    "She is not wearing her glasses today.",
    "They are not attending the conference.",
    "Are you listening to music on your headphones?",
    "Is she coming to the party tonight?",
    "What are you doing this weekend?",
    "I am not eating meat this month.",
    "He is not wearing a tie to the meeting.",
    "Are they leaving for vacation soon?",
  ],
  simplePast: [
    "I visited Paris last summer.",
    "She cooked dinner yesterday.",
    "They played football after school.",
    "He graduated from college in 2020.",
    "We travelled to Italy last year.",
    "She read a great book last night.",
    "They went to the beach on Saturday.",
    "I saw that movie 2 days ago.",
    "She lived in London as a child.",
    "We met at a conference last month.",
    "She worked at that company before.",
    "I ate lunch an hour ago.",
    "They visited the museum on Sunday.",
    "He finished his homework yesterday.",
    "She cleaned the house last week.",
    "We danced all night at the party.",
    "I didn't watch TV yesterday.",
    "Did they go to the concert?",
    "She didn't call me back.",
    "Did you see the accident?",
  ],
  pastContinuous: [
    "I was studying when he called.",
    "She was reading a book all evening.",
    "They were working on the project yesterday.",
    "He was driving to work at 8:00 a.m.",
    "We were watching a movie last night.",
    "She was cooking dinner when the power went out.",
    "They were playing in the garden when it started raining.",
    "I was listening to music on my headphones.",
    "He was not paying attention during the class.",
    "Were you practicing the piano at that time?",
    "She was talking to her friend on the phone.",
    "They were running in the park when it got dark.",
    "I was not wearing my coat so I got cold.",
    "She wasn't coming to the party last Saturday.",
    "Were you working on your assignment all day?",
    "He was not sleeping well due to the noise.",
    "What were you doing when the earthquake occurred?",
    "They were not playing video games in the evening.",
    "Was she writing a letter to her pen pal?",
    "I was not feeling well during the trip.",
  ],
  presentPerfect: [
    "I have lived here for 5 years.",
    "She has seen that movie before.",
    "They have never visited Europe.",
    "He has just finished his homework.",
    "We have travelled to many countries.",
    "She has already eaten dinner.",
    "They have visited the Grand Canyon.",
    "I have never tried sushi.",
    "She has been to Paris three times.",
    "He has worked at the same company since 2010.",
    "We have studied English for years.",
    "I have just received a promotion.",
    "They have not met my brother yet.",
    "She has recently learned how to swim.",
    "I have read that book already.",
    "He has visited the Eiffel Tower.",
    "They have experienced many adventures.",
    "We have seen this movie multiple times.",
    "She has not finished her assignment yet.",
    "Have you ever been to Asia?",
  ],
  pastPerfect: [
    "I had finished my homework when he called.",
    "She had already left when I called her.",
    "They had eaten dinner before the movie started.",
    "He had completed the project by the time I arrived.",
    "We had already left the restaurant when the storm began.",
    "She had read the book before the movie came out.",
    "They had already left for the airport when we arrived at their house.",
    "I had studied French before travelling to Paris.",
    "He had finished the race before it started raining.",
    "We had already booked the tickets before the event was cancelled.",
    "She had written the report before the meeting.",
    "They had cooked dinner before the guests arrived.",
    "I had already prepared breakfast before you woke up.",
    "She had solved the puzzle before I could even try.",
    "They had visited the museum before it closed.",
    "He had fixed the car before we needed to use it.",
    "We had cleaned the house before the party.",
    "She had returned the library books before they were overdue.",
    "They had taken the dog for a walk before it started raining.",
    "I had submitted my application before the deadline.",
  ],
  presentPerfectContinuous: [
    "I have been studying all day.",
    "She has been working at the company for years.",
    "They have been playing games since morning.",
    "He has been practicing the guitar for hours.",
    "We have been renovating the house this week.",
    "She has been running in the park for half an hour.",
    "They have been building a sand castle at the beach.",
    "I have been cooking since I got home.",
    "He has been watching TV all afternoon.",
    "We have been waiting for the bus for 20 minutes.",
    "She has been gardening in the garden.",
    "They have been learning a new language for a while.",
    "I have been playing the piano for years.",
    "She has been working out at the gym lately.",
    "He has been fishing by the river all morning.",
    "We have been discussing the project for hours.",
    "They have been studying for the final exams.",
    "I have been knitting a sweater for my niece.",
    "She has been cleaning the entire house.",
    "They have been hiking in the mountains for days.",
  ],
  pastPerfectContinuous: [
    "I had been studying for hours when he called.",
    "She had been playing the piano all evening.",
    "They had been working on the project all day yesterday.",
    "He had been fishing by the lake for most of the morning.",
    "We had been waiting at the airport for hours before the flight was cancelled.",
    "She had been practicing the guitar for weeks before the concert.",
    "They had been discussing the issue for a long time before reaching a decision.",
    "I had been living in the city for 3 years before I moved to the countryside.",
    "She had been dancing at the club all night before she got tired.",
    "They had been travelling across Europe for months.",
    "I had been attending the same school for years before we moved.",
    "She had been working on the novel for several months before finishing it.",
    "He had been studying medicine for a decade before becoming a doctor.",
    "We had been renovating the old house for weeks before it was ready to move in.",
    "They had been skiing in the mountains for a few hours when the storm hit.",
    "I had been volunteering at the shelter for a year before I got a paid job there.",
    "She had been practicing yoga for years before becoming an instructor.",
    "They had been painting the living room for the entire weekend.",
    "He had been growing vegetables in his garden for months.",
    "We had been waiting for the bus for half an hour before it finally arrived.",
  ],
  futureSimple: [
    "I will go to the shop tomorrow.",
    "She will call you later.",
    "They will arrive at 7 p.m.",
    "He will graduate next year.",
    "We will visit our grandparents on the weekend.",
    "She will start a new job in autumn.",
    "They will attend the concert on Friday.",
    "I will read that book next month.",
    "She will finish her project by the end of the day.",
    "They will take a holiday next summer.",
    "He will buy a new car next week.",
    "We will have a party on Saturday.",
    "She will visit Paris someday.",
    "They will get married in the spring.",
    "I will send you an email soon.",
    "She will meet you at the restaurant.",
    "They will watch a movie tonight.",
    "He will become a doctor in the future.",
    "We will learn a new language next year.",
    "I will help you with your homework.",
  ],
  futureContinuous: [
    "I will be studying when you arrive.",
    "She will be working late tonight.",
    "They will be playing football at the park.",
    "He will be driving to work at that time.",
    "We will be having dinner when you call.",
    "She will be attending a conference next week.",
    "They will be traveling to Italy during the summer.",
    "I will be waiting for you at the café.",
    "He will be watching the game on TV.",
    "We will be relaxing at the beach next month.",
    "She will not be working on the project tomorrow.",
    "They will not be attending the meeting next week.",
    "Will you be coming to the party later?",
    "What will you be doing at this time tomorrow?",
    "They will not be playing video games this weekend.",
    "He will be reading a book in the evening.",
    "We will be visiting friends next Saturday.",
    "I will be exercising at the gym tomorrow morning.",
    "Will she be studying for her exams tonight?",
    "They will be eating out for dinner.",
  ],
  futurePerfect: [
    "I will have completed my assignment by Friday.",
    "She will have finished her project by next week.",
    "They will have arrived by noon.",
    "He will have graduated by the end of the year.",
    "We will have traveled to five countries by the end of the trip.",
    "She will have read that book before the exam.",
    "They will have eaten dinner by the time we arrive.",
    "I will have saved enough money for a new car.",
    "He will have worked at the company for ten years next month.",
    "We will have painted the house by the time the guests arrive.",
    "She will not have finished her report by then.",
    "They will not have completed the project on time.",
    "Will you have returned by 8 p.m.?",
    "What will you have accomplished by the end of the year?",
    "He will not have solved the problem yet.",
    "We will have learned a lot by the end of the course.",
    "I will have cooked dinner by the time you get home.",
    "Will she have graduated before her birthday?",
    "They will have moved to a new house by next month.",
    "I will have read that book by next week.",
  ],
  futurePerfectContinuous: [
    "I will have been studying for three hours by noon.",
    "She will have been working at the company for five years by next month.",
    "They will have been playing football for two hours by the time we arrive.",
    "He will have been driving for six hours by the time he gets home.",
    "We will have been waiting for an hour when the bus arrives.",
    "She will have been practicing for weeks before the concert.",
    "They will have been traveling for days by the time they reach their destination.",
    "I will have been working on this project for months.",
    "He will have been watching TV for four hours straight.",
    "We will have been discussing the issue for hours.",
    "She will not have been studying for the exam by then.",
    "They will not have been practicing enough for the competition.",
    "Will you have been living here for a year by next month?",
    "What will you have been doing for the past three hours?",
    "He will not have been exercising regularly.",
    "We will have been working together for a long time.",
    "I will have been cleaning the house for two hours when you arrive.",
    "Will she have been taking care of the baby all day?",
    "They will have been waiting for the train for half an hour.",
    "I will have been reading that book for weeks.",
  ],
  futureSimple: [
    "I will go to the store tomorrow.",
    "She will meet us at the restaurant.",
    "They will travel to Paris next summer.",
    "He will start his new job next week.",
    "We will have a picnic this weekend.",
    "You will see the movie next Friday.",
    "I will call you later.",
    "They will finish their homework by 8 PM.",
    "He will visit his grandparents this Sunday.",
    "We will play soccer after school.",
    "She will not attend the meeting tomorrow.",
    "They will not go to the party next week.",
    "Will you join us for dinner tonight?",
    "What will you do over the weekend?",
    "He will not finish his project on time.",
    "We will learn a new language next year.",
    "I will help you with your homework.",
  ],
  futureContinuous: [
    "I will be studying when you arrive.",
    "She will be working late tonight.",
    "They will be playing football at the park.",
    "He will be driving to work at that time.",
    "We will be having dinner when you call.",
    "She will be attending a conference next week.",
    "They will be traveling to Italy during the summer.",
    "I will be waiting for you at the café.",
    "He will be watching the game on TV.",
    "We will be relaxing at the beach next month.",
    "She will not be working on the project tomorrow.",
    "They will not be attending the meeting next week.",
    "Will you be coming to the party later?",
    "What will you be doing at this time tomorrow?",
    "They will not be playing video games this weekend.",
    "He will be reading a book in the evening.",
    "We will be visiting friends next Saturday.",
    "I will be exercising at the gym tomorrow morning.",
    "Will she be studying for her exams tonight?",
    "They will be eating out for dinner.",
  ],
  futurePerfect: [
    "I will have completed my assignment by Friday.",
    "She will have finished her project by next week.",
    "They will have arrived by noon.",
    "He will have graduated by the end of the year.",
    "We will have traveled to five countries by the end of the trip.",
    "She will have read that book before the exam.",
    "They will have eaten dinner by the time we arrive.",
    "I will have saved enough money for a new car.",
    "He will have worked at the company for ten years next month.",
    "We will have painted the house by the time the guests arrive.",
    "She will not have finished her report by then.",
    "They will not have completed the project on time.",
    "Will you have returned by 8 p.m.?",
    "What will you have accomplished by the end of the year?",
    "He will not have solved the problem yet.",
    "We will have learned a lot by the end of the course.",
    "I will have cooked dinner by the time you get home.",
    "Will she have graduated before her birthday?",
    "They will have moved to a new house by next month.",
    "I will have read that book by next week.",
    // Additional sentences
    "He will have written his thesis before the semester ends.",
    "We will have visited all the major tourist attractions by the end of the day.",
    "She will have run a marathon by the time she turns 30.",
    "They will have finished building the new bridge by the year 2025.",
    "I will have taken five courses on coding by the end of the year.",
    "She will have completed her 10,000-piece jigsaw puzzle by tomorrow.",
    "They will have harvested all the crops by the time the rain starts.",
    "He will have repaired the car by the time we need to use it.",
    "We will have made significant progress on the project by the next meeting.",
    "She will have played the piano for 20 years by her 40th birthday.",
  ],
  futurePerfectContinuous: [
    "I will have been studying for three hours by noon.",
    "She will have been working at the company for five years by next month.",
    "They will have been playing football for two hours by the time we arrive.",
    "He will have been driving for six hours by the time he gets home.",
    "We will have been waiting for an hour when the bus arrives.",
    "She will have been practicing for weeks before the concert.",
    "They will have been traveling for days by the time they reach their destination.",
    "I will have been working on this project for months.",
    "He will have been watching TV for four hours straight.",
    "We will have been discussing the issue for hours.",
    "She will not have been studying for the exam by then.",
    "They will not have been practicing enough for the competition.",
    "Will you have been living here for a year by next month?",
    "What will you have been doing for the past three hours?",
    "He will not have been exercising regularly.",
    "We will have been working together for a long time.",
    "I will have been cleaning the house for two hours when you arrive.",
    "Will she have been taking care of the baby all day?",
    "They will have been waiting for the train for half an hour.",
    "I will have been reading that book for weeks.",
    // Additional sentences
    "By the time we arrive, they will have been waiting for 2 hours.",
    "I will have been working at this company for a decade by next year.",
    "She will have been studying for the exam for six months by then.",
    "They will have been living in the same house for a year next week.",
    "He will have been playing the guitar for hours when the concert starts.",
    "By the time you visit, I will have been cleaning the garage all day.",
    "She will have been practicing yoga for years by the time she becomes an instructor.",
    "They will have been hiking in the mountains for days when they reach the summit.",
    "I will have been volunteering at the shelter for a year by next month.",
    "She will have been running her own business for a decade by the time she retires.",
    "They will have been building the house for 6 months when it's finished.",
    "By next week, he will have been taking piano lessons for a year.",
    "She will have been studying medicine for years by the time she becomes a doctor.",
    "They will have been travelling across Europe for months when they return.",
    "I will have been writing the novel for a year by the time it's published.",
    "He will have been teaching at the University for a decade when he retires.",
    "By the time you call, I will have been waiting for hours.",
    "She will have been swimming in the pool for an hour by sunset.",
    "They will have been working on the project for weeks when it's completed.",
    "I will have been taking care of the garden for years by next spring.",
  ],
};

const quizQuestions = {
  simplePresent: [
    {
      question: "I ______ up at 6.00 a.m. every morning.",
      options: {
        a: "woke",
        b: "wake",
        c: "am waking",
        d: "will wake",
      },
      answer: "b",
      explanation:
        "This sentence is in the simple present tense, indicating a habitual action that occurs regularly every morning.",
    },
    {
      question: "She ______ English at a local school.",
      options: ["a) taught", "b) is teaching", "c) teaches", "d) will teach"],
      answer: "c",
      explanation:
        "This sentence uses the simple present tense to express a regular action or occupation.",
    },
    {
      question: "They ______ playing football on weekends.",
      options: ["a) enjoyed", "b) enjoy", "c) are enjoying", "d) will enjoy"],
      answer: "b",
      explanation:
        "This sentence is in the simple present tense, showing a general truth or habitual action.",
    },
    {
      question: "He ______ in a hospital as a nurse.",
      options: ["a) worked", "b) is working", "c) works", "d) will work"],
      answer: "c",
      explanation:
        "This sentence is in the simple present tense, indicating a current job or profession.",
    },
    {
      question: "The sun ______ in the east.",
      options: ["a) rose", "b) rises", "c) is rising", "d) will rise"],
      answer: "b",
      explanation:
        "This is a factual statement in the simple present tense, describing a universal truth.",
    },
    {
      question: "Dogs ______ loudly when strangers approach.",
      options: ["a) barked", "b) bark", "c) are barking", "d) will bark"],
      answer: "b",
      explanation:
        "This sentence is in the simple present tense, indicating a general characteristic or behavior of dogs.",
    },
    {
      question: "My father ______ the newspaper daily.",
      options: ["a) read", "b) is reading", "c) reads", "d) will read"],
      answer: "c",
      explanation:
        "This sentence uses the simple present tense to express a routine activity.",
    },
    {
      question: "We ______ in a quiet neighbourhood.",
      options: ["a) lived", "b) are living", "c) live", "d) will live"],
      answer: "c",
      explanation:
        "This sentence is in the simple present tense, indicating a current state of residence.",
    },
    {
      question: "The earth ______ around the sun.",
      options: [
        "a) revolved",
        "b) revolves",
        "c) is revolving",
        "d) will revolve",
      ],
      answer: "b",
      explanation:
        "This sentence describes a scientific fact in the simple present tense.",
    },
    {
      question: "She ______ visits her grandparents.",
      options: ["a) often", "b) is often", "c) was often", "d) will often"],
      answer: "a",
      explanation:
        "This sentence uses the adverb 'often' with the simple present tense to indicate a frequent action.",
    },
  ],
  presentContinuous: [
    {
      question: "I ______ a book right now.",
      options: ["a) read", "b) am reading", "c) was reading", "d) will read"],
      answer: "b",
      explanation:
        "This sentence is in the present continuous tense, indicating an action happening at the moment of speaking.",
    },
    {
      question: "She ______ dinner for her family.",
      options: ["a) cooked", "b) is cooking", "c) was cooking", "d) will cook"],
      answer: "b",
      explanation:
        "This sentence uses the present continuous tense to express an action currently in progress.",
    },
    {
      question: "They ______ basketball in the park.",
      options: [
        "a) played",
        "b) are playing",
        "c) were playing",
        "d) will play",
      ],
      answer: "b",
      explanation:
        "This sentence indicates an action that is happening right now using the present continuous tense.",
    },
    {
      question: "He ______ a movie at the cinema.",
      options: [
        "a) watched",
        "b) is watching",
        "c) was watching",
        "d) will watch",
      ],
      answer: "b",
      explanation:
        "This sentence uses the present continuous tense to indicate an action occurring at this moment.",
    },
    {
      question: "We ______ for our final exams.",
      options: [
        "a) studied",
        "b) are studying",
        "c) were studying",
        "d) will study",
      ],
      answer: "b",
      explanation:
        "This sentence describes an ongoing action in the present continuous tense.",
    },
    {
      question: "The baby ______ in the crib.",
      options: [
        "a) slept",
        "b) is sleeping",
        "c) was sleeping",
        "d) will sleep",
      ],
      answer: "b",
      explanation:
        "This sentence uses the present continuous tense to describe what the baby is doing at the moment.",
    },
    {
      question: "It ______ outside.",
      options: ["a) rained", "b) is raining", "c) was raining", "d) will rain"],
      answer: "b",
      explanation:
        "This sentence indicates a current weather condition using the present continuous tense.",
    },
    {
      question: "She ______ on a new project.",
      options: ["a) worked", "b) is working", "c) was working", "d) will work"],
      answer: "b",
      explanation:
        "This sentence describes an ongoing action in the present continuous tense.",
    },
    {
      question: "They ______ lunch in the cafeteria.",
      options: ["a) ate", "b) are eating", "c) were eating", "d) will eat"],
      answer: "b",
      explanation:
        "This sentence uses the present continuous tense to indicate what they are currently doing.",
    },
    {
      question: "I ______ a friend for coffee later.",
      options: ["a) met", "b) am meeting", "c) was meeting", "d) will meet"],
      answer: "b",
      explanation:
        "This sentence indicates a planned action that is happening in the near future using the present continuous tense.",
    },
  ],
  // Additional tenses can be added similarly.
};
// -------------------------- \\
export const listAll12TensesMcqs = {
  simplePresent: [
    { type: "simple Present" },
    {
      question: "I ______ up at 6.00 a.m. every morning.",
      options: {
        a: "woke",
        b: "wake",
        c: "am waking",
        d: "will wake",
      },
      answer: "b",
      explanation:
        "This sentence is in the simple present tense, indicating a habitual action that occurs regularly every morning.",
    },
    {
      question: "She ______ English at a local school.",
      options: {
        a: "teached",
        b: "teach",
        c: "teaches",
        d: "is teaching",
      },
      answer: "c",
      explanation:
        "The sentence uses simple present tense to describe a regular action.",
    },
    {
      question: "They ______ playing football on weekends.",
      options: {
        a: "enjoyed",
        b: "enjoy",
        c: "enjoying",
        d: "are enjoying",
      },
      answer: "b",
      explanation:
        "This sentence is in the simple present tense, indicating a regular activity.",
    },
    {
      question: "He ______ in a hospital as a nurse.",
      options: {
        a: "work",
        b: "works",
        c: "worked",
        d: "is working",
      },
      answer: "b",
      explanation:
        "This sentence is in the simple present tense, describing a job.",
    },
    {
      question: "The sun ______ in the east.",
      options: {
        a: "rise",
        b: "rises",
        c: "rose",
        d: "is rising",
      },
      answer: "b",
      explanation: "The sentence uses simple present tense to state a fact.",
    },
    {
      question: "Dogs ______ loudly when strangers approach.",
      options: {
        a: "bark",
        b: "barking",
        c: "barked",
        d: "barks",
      },
      answer: "a",
      explanation:
        "This sentence is in the simple present tense, indicating a habitual action.",
    },
    {
      question: "My father ______ the newspaper daily.",
      options: {
        a: "read",
        b: "reads",
        c: "reading",
        d: "is reading",
      },
      answer: "b",
      explanation:
        "The sentence uses simple present tense to describe a routine activity.",
    },
    {
      question: "We ______ in a quiet neighbourhood.",
      options: {
        a: "live",
        b: "lives",
        c: "living",
        d: "lived",
      },
      answer: "a",
      explanation:
        "This sentence is in the simple present tense, indicating a permanent situation.",
    },
    {
      question: "The earth ______ around the sun.",
      options: {
        a: "revolve",
        b: "revolves",
        c: "revolved",
        d: "is revolving",
      },
      answer: "b",
      explanation:
        "This sentence is in the simple present tense, stating a scientific fact.",
    },
    {
      question: "She ______ visits her grandparents.",
      options: {
        a: "often",
        b: "oftens",
        c: "is often",
        d: "visited",
      },
      answer: "a",
      explanation:
        "The adverb 'often' is used with the simple present tense to describe frequency.",
    },
    {
      question: "The train ______ at 9 a.m.",
      options: {
        a: "depart",
        b: "departs",
        c: "departed",
        d: "is departing",
      },
      answer: "b",
      explanation:
        "This sentence is in the simple present tense, indicating a scheduled event.",
    },
    {
      question: "He ______ drinks tea for breakfast.",
      options: {
        a: "usually",
        b: "usual",
        c: "used",
        d: "is usual",
      },
      answer: "a",
      explanation:
        "The adverb 'usually' modifies the simple present tense verb.",
    },
    {
      question: "It ______ a lot during the monsoon season.",
      options: {
        a: "rain",
        b: "rains",
        c: "rained",
        d: "is raining",
      },
      answer: "b",
      explanation:
        "This sentence is in the simple present tense, indicating a seasonal pattern.",
    },
    {
      question: "My mum ______ delicious meals.",
      options: {
        a: "cook",
        b: "cooked",
        c: "cooks",
        d: "is cooking",
      },
      answer: "c",
      explanation:
        "The sentence uses simple present tense to indicate a habitual action.",
    },
    {
      question: "Cats ______ when they are content.",
      options: {
        a: "purr",
        b: "purred",
        c: "are purring",
        d: "purring",
      },
      answer: "a",
      explanation:
        "This sentence is in the simple present tense, describing a behavior.",
    },
    {
      question: "They ______ like spicy food.",
      options: {
        a: "don't",
        b: "doesn't",
        c: "didn't",
        d: "are not",
      },
      answer: "a",
      explanation:
        "This sentence is in the simple present tense, indicating a preference.",
    },
    {
      question: "We ______ the same school.",
      options: {
        a: "attend",
        b: "attended",
        c: "attending",
        d: "are attending",
      },
      answer: "a",
      explanation:
        "The sentence uses simple present tense to describe a current situation.",
    },
    {
      question: "The company ______ for business at 8 a.m.",
      options: {
        a: "open",
        b: "opens",
        c: "opened",
        d: "is opening",
      },
      answer: "b",
      explanation:
        "This sentence is in the simple present tense, indicating a routine operation.",
    },
    {
      question: "Birds ______ in the morning.",
      options: {
        a: "sing",
        b: "sang",
        c: "sings",
        d: "are singing",
      },
      answer: "a",
      explanation:
        "This sentence is in the simple present tense, describing a natural occurrence.",
    },
    {
      question: "I ______ tennis every Sunday.",
      options: {
        a: "play",
        b: "plays",
        c: "playing",
        d: "played",
      },
      answer: "a",
      explanation:
        "The sentence uses simple present tense to indicate a regular activity.",
    },
  ],
  presentContinuous: [
    { type: "present Continuous" },
    {
      question: "I ______ a book right now.",
      options: {
        a: "read",
        b: "am reading",
        c: "reads",
        d: "is reading",
      },
      answer: "b",
      explanation:
        "This sentence is in the present continuous tense, indicating an action happening now.",
    },
    {
      question: "She ______ dinner for her family.",
      options: {
        a: "is cooking",
        b: "cooks",
        c: "cooked",
        d: "cook",
      },
      answer: "a",
      explanation:
        "The present continuous tense is used to describe an action currently in progress.",
    },
    {
      question: "They ______ basketball in the park.",
      options: {
        a: "are playing",
        b: "played",
        c: "playing",
        d: "is playing",
      },
      answer: "a",
      explanation:
        "This sentence is in the present continuous tense, indicating an action happening right now.",
    },
    {
      question: "He ______ a movie at the cinema.",
      options: {
        a: "is watching",
        b: "watches",
        c: "watched",
        d: "watch",
      },
      answer: "a",
      explanation:
        "This sentence is in the present continuous tense, indicating an ongoing action.",
    },
    {
      question: "We ______ for our final exams.",
      options: {
        a: "are studying",
        b: "studies",
        c: "study",
        d: "is studying",
      },
      answer: "a",
      explanation:
        "The present continuous tense describes an action currently being undertaken.",
    },
    {
      question: "The baby ______ in the crib.",
      options: {
        a: "is sleeping",
        b: "sleep",
        c: "sleeps",
        d: "sleeping",
      },
      answer: "a",
      explanation:
        "This sentence is in the present continuous tense, indicating an action currently taking place.",
    },
    {
      question: "It ______ outside.",
      options: {
        a: "is raining",
        b: "rains",
        c: "rained",
        d: "rain",
      },
      answer: "a",
      explanation:
        "The present continuous tense is used to describe weather conditions currently occurring.",
    },
    {
      question: "She ______ on a new project.",
      options: {
        a: "is working",
        b: "works",
        c: "worked",
        d: "working",
      },
      answer: "a",
      explanation:
        "This sentence is in the present continuous tense, indicating an ongoing action.",
    },
    {
      question: "I ______ my best friend at the moment.",
      options: {
        a: "am visiting",
        b: "visit",
        c: "visited",
        d: "visiting",
      },
      answer: "a",
      explanation:
        "This sentence is in the present continuous tense, indicating an action happening now.",
    },
    {
      question: "They ______ for a trip next month.",
      options: {
        a: "are preparing",
        b: "prepared",
        c: "prepare",
        d: "preparing",
      },
      answer: "a",
      explanation:
        "This sentence is in the present continuous tense, describing a current preparation.",
    },
    {
      question: "He ______ his guitar right now.",
      options: {
        a: "is playing",
        b: "plays",
        c: "play",
        d: "played",
      },
      answer: "a",
      explanation:
        "This sentence is in the present continuous tense, indicating an ongoing action.",
    },
    {
      question: "We ______ a lot of fun at the party.",
      options: {
        a: "are having",
        b: "had",
        c: "have",
        d: "having",
      },
      answer: "a",
      explanation:
        "The present continuous tense is used to describe an action currently happening.",
    },
    {
      question: "I ______ a language class this semester.",
      options: {
        a: "am taking",
        b: "takes",
        c: "took",
        d: "take",
      },
      answer: "a",
      explanation:
        "This sentence is in the present continuous tense, indicating an ongoing activity.",
    },
    {
      question: "The dog ______ in the yard.",
      options: {
        a: "is playing",
        b: "plays",
        c: "play",
        d: "played",
      },
      answer: "a",
      explanation:
        "This sentence is in the present continuous tense, indicating an action happening right now.",
    },
    {
      question: "My friends ______ to the concert together.",
      options: {
        a: "are going",
        b: "go",
        c: "went",
        d: "going",
      },
      answer: "a",
      explanation:
        "The present continuous tense indicates an action currently in progress.",
    },
    {
      question: "She ______ for her driving test.",
      options: {
        a: "is practicing",
        b: "practices",
        c: "practiced",
        d: "practice",
      },
      answer: "a",
      explanation:
        "This sentence is in the present continuous tense, indicating an ongoing activity.",
    },
    {
      question: "The kids ______ with their toys.",
      options: {
        a: "are playing",
        b: "played",
        c: "play",
        d: "playing",
      },
      answer: "a",
      explanation:
        "This sentence is in the present continuous tense, indicating an action happening right now.",
    },
    {
      question: "I ______ my homework at the moment.",
      options: {
        a: "am finishing",
        b: "finished",
        c: "finish",
        d: "finishing",
      },
      answer: "a",
      explanation:
        "The present continuous tense describes an action currently taking place.",
    },
  ],
  presentPerfect: [
    { type: "present Perfect" },
    {
      id: 41,
      question: "I ______ lived here for 5 years.",
      options: {
        a: "have",
        b: "had",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "The present perfect tense indicates an action that started in the past and continues to the present.",
    },
    {
      id: 42,
      question: "She ______ seen that movie before.",
      options: {
        a: "has",
        b: "have",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence uses present perfect tense to indicate an experience up to the present.",
    },
    {
      id: 43,
      question: "They ______ never visited Europe.",
      options: {
        a: "have",
        b: "has",
        c: "was",
        d: "are",
      },
      answer: "a",
      explanation:
        "The present perfect tense is used to show that an experience has not occurred until now.",
    },
    {
      id: 44,
      question: "He ______ just finished his homework.",
      options: {
        a: "has",
        b: "have",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence uses present perfect tense to indicate a recently completed action.",
    },
    {
      id: 45,
      question: "We ______ travelled to many countries.",
      options: {
        a: "have",
        b: "had",
        c: "was",
        d: "are",
      },
      answer: "a",
      explanation:
        "The present perfect tense shows that an action has occurred at some point in the past with relevance to the present.",
    },
    {
      id: 46,
      question: "She ______ already eaten dinner.",
      options: {
        a: "has",
        b: "have",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence uses present perfect tense to indicate that an action has been completed.",
    },
    {
      id: 47,
      question: "They ______ visited the Grand Canyon.",
      options: {
        a: "have",
        b: "has",
        c: "was",
        d: "are",
      },
      answer: "a",
      explanation:
        "The present perfect tense indicates that an experience has occurred at some point up to now.",
    },
    {
      id: 48,
      question: "I ______ never tried sushi.",
      options: {
        a: "have",
        b: "has",
        c: "was",
        d: "are",
      },
      answer: "a",
      explanation:
        "This sentence uses present perfect tense to show that an experience has not occurred until now.",
    },
    {
      id: 49,
      question: "She ______ been to Paris three times.",
      options: {
        a: "has",
        b: "have",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "The present perfect tense indicates an experience that has happened up to the present.",
    },
    {
      id: 50,
      question: "He ______ worked at the same company since 2010.",
      options: {
        a: "has",
        b: "have",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence uses present perfect tense to indicate an ongoing action from the past to the present.",
    },
    {
      id: 51,
      question: "We ______ studied English for years.",
      options: {
        a: "have",
        b: "has",
        c: "was",
        d: "are",
      },
      answer: "a",
      explanation:
        "The present perfect tense indicates an action that started in the past and continues to the present.",
    },
    {
      id: 52,
      question: "I ______ visited that museum before.",
      options: {
        a: "have",
        b: "has",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence uses present perfect tense to indicate an experience up to the present.",
    },
    {
      id: 53,
      question: "They ______ just arrived at the airport.",
      options: {
        a: "have",
        b: "has",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "The present perfect tense indicates a recently completed action.",
    },
    {
      id: 54,
      question: "She ______ not decided yet.",
      options: {
        a: "has",
        b: "have",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence uses present perfect tense in the negative form to show that a decision has not been made.",
    },
    {
      id: 55,
      question: "______ you ______ finished your project?",
      options: {
        a: "Have",
        b: "Has",
        c: "Was",
        d: "Is",
      },
      answer: "a",
      explanation:
        "This sentence is in the present perfect tense, asking about the completion of an action.",
    },
    {
      id: 56,
      question: "I ______ seen her this week.",
      options: {
        a: "have",
        b: "has",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "The present perfect tense indicates that an action has occurred at some point in the past with relevance to the present.",
    },
    {
      id: 57,
      question: "She ______ not finished her homework.",
      options: {
        a: "has",
        b: "have",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence uses present perfect tense in the negative form to indicate an unfinished action.",
    },
    {
      id: 58,
      question: "They ______ completed the assignment on time.",
      options: {
        a: "have",
        b: "has",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "The present perfect tense indicates a completed action with relevance to the present.",
    },
    {
      id: 59,
      question: "He ______ saved enough money for a new car.",
      options: {
        a: "has",
        b: "have",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence uses present perfect tense to indicate an ongoing action from the past to the present.",
    },
    {
      id: 60,
      question: "We ______ not seen each other in a long time.",
      options: {
        a: "have",
        b: "has",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence uses present perfect tense in the negative form to indicate an absence of interaction over time.",
    },
  ],
  presentPerfectContinuous: [
    { type: "present Perfect Continuous" },
    {
      id: 1,
      question: "I ______ been studying all day.",
      options: {
        a: "have",
        b: "has",
        c: "am",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence uses present perfect continuous to indicate an action that started in the past and is still ongoing.",
    },
    {
      id: 2,
      question: "She ______ been working at the company for years.",
      options: {
        a: "has",
        b: "have",
        c: "is",
        d: "am",
      },
      answer: "a",
      explanation:
        "The present perfect continuous tense shows that her work at the company began in the past and continues to the present.",
    },
    {
      id: 3,
      question: "They ______ been playing games since morning.",
      options: {
        a: "have",
        b: "has",
        c: "are",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence indicates that their gaming started in the morning and is still happening.",
    },
    {
      id: 4,
      question: "He ______ been practicing the guitar for hours.",
      options: {
        a: "has",
        b: "have",
        c: "is",
        d: "was",
      },
      answer: "a",
      explanation:
        "The present perfect continuous shows that his practice has been ongoing for a long duration.",
    },
    {
      id: 5,
      question: "We ______ been renovating the house this week.",
      options: {
        a: "have",
        b: "has",
        c: "were",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence indicates that the house renovation started earlier in the week and continues.",
    },
    {
      id: 6,
      question: "She ______ been running in the park for half an hour.",
      options: {
        a: "has",
        b: "have",
        c: "is",
        d: "was",
      },
      answer: "a",
      explanation:
        "The present perfect continuous indicates that her running started half an hour ago and is ongoing.",
    },
    {
      id: 7,
      question: "They ______ been building a sand castle at the beach.",
      options: {
        a: "have",
        b: "has",
        c: "were",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence indicates their activity of building started in the past and continues to the present.",
    },
    {
      id: 8,
      question: "I ______ been cooking since I got home.",
      options: {
        a: "have",
        b: "has",
        c: "am",
        d: "is",
      },
      answer: "a",
      explanation:
        "The present perfect continuous shows that the cooking started after arriving home and is ongoing.",
    },
    {
      id: 9,
      question: "He ______ been watching TV all afternoon.",
      options: {
        a: "has",
        b: "have",
        c: "is",
        d: "was",
      },
      answer: "a",
      explanation:
        "This sentence indicates that he started watching TV earlier in the afternoon and continues to do so.",
    },
    {
      id: 10,
      question: "We ______ been waiting for the bus for 20 minutes.",
      options: {
        a: "have",
        b: "has",
        c: "were",
        d: "is",
      },
      answer: "a",
      explanation:
        "The present perfect continuous tense indicates that the waiting started 20 minutes ago and is still ongoing.",
    },
    {
      id: 11,
      question: "She ______ been gardening in the garden.",
      options: {
        a: "has",
        b: "have",
        c: "is",
        d: "was",
      },
      answer: "a",
      explanation:
        "The present perfect continuous indicates that her gardening started in the past and is still happening.",
    },
    {
      id: 12,
      question: "They ______ been learning a new language for a while.",
      options: {
        a: "have",
        b: "has",
        c: "were",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence shows that their learning process began in the past and continues.",
    },
    {
      id: 13,
      question: "I ______ been playing the piano for years.",
      options: {
        a: "have",
        b: "has",
        c: "am",
        d: "is",
      },
      answer: "a",
      explanation:
        "The present perfect continuous indicates that my piano playing started years ago and is ongoing.",
    },
    {
      id: 14,
      question: "She ______ been working out at the gym lately.",
      options: {
        a: "has",
        b: "have",
        c: "is",
        d: "was",
      },
      answer: "a",
      explanation:
        "This sentence indicates that her workouts at the gym began recently and continue.",
    },
    {
      id: 15,
      question: "He ______ been fishing by the river all morning.",
      options: {
        a: "has",
        b: "have",
        c: "is",
        d: "was",
      },
      answer: "a",
      explanation:
        "The present perfect continuous tense indicates that his fishing started in the morning and is ongoing.",
    },
    {
      id: 16,
      question: "We ______ been discussing the project for hours.",
      options: {
        a: "have",
        b: "has",
        c: "were",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence shows that our discussion of the project started hours ago and continues.",
    },
    {
      id: 17,
      question: "They ______ been studying for the final exams.",
      options: {
        a: "have",
        b: "has",
        c: "were",
        d: "is",
      },
      answer: "a",
      explanation:
        "The present perfect continuous indicates that their studying began in the past and is ongoing.",
    },
    {
      id: 18,
      question: "I ______ been knitting a sweater for my niece.",
      options: {
        a: "have",
        b: "has",
        c: "am",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence indicates that my knitting started in the past and continues.",
    },
    {
      id: 19,
      question: "She ______ been cleaning the entire house.",
      options: {
        a: "has",
        b: "have",
        c: "is",
        d: "was",
      },
      answer: "a",
      explanation:
        "The present perfect continuous tense indicates that her cleaning started earlier and is ongoing.",
    },
    {
      id: 20,
      question: "They ______ been hiking in the mountains for days.",
      options: {
        a: "have",
        b: "has",
        c: "were",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence indicates that their hiking began days ago and continues.",
    },
  ],
  simplePast: [
    { type: "simple past" },
    {
      id: 1,
      question: "I ______ Paris last summer.",
      options: {
        a: "visit",
        b: "visited",
        c: "visiting",
        d: "was visiting",
      },
      answer: "b",
      explanation:
        "This sentence is in the simple past tense, indicating a completed action that occurred at a specific time in the past.",
    },
    {
      id: 2,
      question: "She ______ dinner yesterday.",
      options: {
        a: "cook",
        b: "cooked",
        c: "cooking",
        d: "was cooking",
      },
      answer: "b",
      explanation:
        "The sentence uses simple past tense to describe an action that has already happened.",
    },
    {
      id: 3,
      question: "They ______ football after school.",
      options: {
        a: "play",
        b: "played",
        c: "playing",
        d: "was playing",
      },
      answer: "b",
      explanation:
        "This sentence is in the simple past tense, indicating an action completed in the past.",
    },
    {
      id: 4,
      question: "He ______ from college in 2020.",
      options: {
        a: "graduate",
        b: "graduated",
        c: "graduating",
        d: "was graduating",
      },
      answer: "b",
      explanation:
        "The sentence uses simple past tense to indicate a completed action at a specific time.",
    },
    {
      id: 5,
      question: "We ______ to Italy last year.",
      options: {
        a: "travel",
        b: "travelling",
        c: "travelled",
        d: "was travelling",
      },
      answer: "c",
      explanation:
        "This sentence is in the simple past tense, indicating a completed journey.",
    },
    {
      id: 6,
      question: "She ______ a great book last night.",
      options: {
        a: "read",
        b: "reads",
        c: "reading",
        d: "was reading",
      },
      answer: "a",
      explanation:
        "The sentence uses simple past tense to describe an action that happened in the past.",
    },
    {
      id: 7,
      question: "They ______ to the beach on Saturday.",
      options: {
        a: "go",
        b: "went",
        c: "going",
        d: "were going",
      },
      answer: "b",
      explanation:
        "This sentence is in the simple past tense, indicating a completed action.",
    },
    {
      id: 8,
      question: "I ______ that movie 2 days ago.",
      options: {
        a: "see",
        b: "saw",
        c: "seeing",
        d: "was seeing",
      },
      answer: "b",
      explanation:
        "This sentence is in the simple past tense, indicating a completed action at a specific time.",
    },
    {
      id: 9,
      question: "She ______ in London as a child.",
      options: {
        a: "live",
        b: "lived",
        c: "living",
        d: "was living",
      },
      answer: "b",
      explanation:
        "The sentence uses simple past tense to describe a past situation.",
    },
    {
      id: 10,
      question: "We ______ at a conference last month.",
      options: {
        a: "meet",
        b: "met",
        c: "meeting",
        d: "were meeting",
      },
      answer: "b",
      explanation:
        "This sentence is in the simple past tense, indicating a completed action.",
    },
    {
      id: 11,
      question: "She ______ at that company before.",
      options: {
        a: "work",
        b: "worked",
        c: "working",
        d: "was working",
      },
      answer: "b",
      explanation:
        "The sentence uses simple past tense to indicate a prior employment.",
    },
    {
      id: 12,
      question: "I ______ lunch an hour ago.",
      options: {
        a: "eat",
        b: "ate",
        c: "eating",
        d: "was eating",
      },
      answer: "b",
      explanation:
        "This sentence is in the simple past tense, indicating a completed action at a specific time.",
    },
    {
      id: 13,
      question: "They ______ the museum on Sunday.",
      options: {
        a: "visit",
        b: "visited",
        c: "visiting",
        d: "were visiting",
      },
      answer: "b",
      explanation:
        "The sentence uses simple past tense to describe an action that has already happened.",
    },
    {
      id: 14,
      question: "He ______ his homework yesterday.",
      options: {
        a: "finish",
        b: "finished",
        c: "finishing",
        d: "was finishing",
      },
      answer: "b",
      explanation:
        "This sentence is in the simple past tense, indicating a completed action.",
    },
    {
      id: 15,
      question: "She ______ the house last week.",
      options: {
        a: "clean",
        b: "cleaned",
        c: "cleaning",
        d: "was cleaning",
      },
      answer: "b",
      explanation:
        "The sentence uses simple past tense to indicate a completed action.",
    },
    {
      id: 16,
      question: "We ______ all night at the party.",
      options: {
        a: "dance",
        b: "danced",
        c: "dancing",
        d: "were dancing",
      },
      answer: "b",
      explanation:
        "This sentence is in the simple past tense, indicating a completed action.",
    },
    {
      id: 17,
      question: "I ______ watch TV yesterday.",
      options: {
        a: "didn't",
        b: "don't",
        c: "wasn't",
        d: "did",
      },
      answer: "a",
      explanation:
        "The negative form is used in the simple past tense to indicate that the action did not happen.",
    },
    {
      id: 18,
      question: "Did they ______ to the concert?",
      options: {
        a: "go",
        b: "went",
        c: "going",
        d: "were going",
      },
      answer: "a",
      explanation:
        "This sentence is in the simple past tense, asking about a completed action.",
    },
    {
      id: 19,
      question: "She ______ call me back.",
      options: {
        a: "didn't",
        b: "doesn't",
        c: "wasn't",
        d: "did",
      },
      answer: "a",
      explanation:
        "The negative form is used in the simple past tense to indicate that the action did not happen.",
    },
    {
      id: 20,
      question: "Did you ______ the accident?",
      options: {
        a: "see",
        b: "saw",
        c: "seeing",
        d: "were seeing",
      },
      answer: "a",
      explanation:
        "This sentence is in the simple past tense, asking about a completed action.",
    },
  ],
  pastContinuous: [
    { type: "past continous" },
    {
      id: 21,
      question: "I ______ when he called.",
      options: {
        a: "studied",
        b: "was studying",
        c: "studying",
        d: "study",
      },
      answer: "b",
      explanation:
        "This sentence is in the past continuous tense, indicating an action that was ongoing when another action occurred.",
    },
    {
      id: 22,
      question: "She ______ a book all evening.",
      options: {
        a: "read",
        b: "was reading",
        c: "reads",
        d: "reading",
      },
      answer: "b",
      explanation:
        "The sentence uses past continuous tense to describe an action in progress over a period of time.",
    },
    {
      id: 23,
      question: "They ______ on the project yesterday.",
      options: {
        a: "were working",
        b: "worked",
        c: "was working",
        d: "working",
      },
      answer: "a",
      explanation:
        "This sentence is in the past continuous tense, indicating an action that was ongoing.",
    },
    {
      id: 24,
      question: "He ______ to work at 8:00 a.m.",
      options: {
        a: "drive",
        b: "drove",
        c: "was driving",
        d: "driving",
      },
      answer: "c",
      explanation:
        "This sentence is in the past continuous tense, describing an action in progress at a specific time.",
    },
    {
      id: 25,
      question: "We ______ a movie last night.",
      options: {
        a: "watch",
        b: "were watching",
        c: "watched",
        d: "watching",
      },
      answer: "b",
      explanation:
        "This sentence uses past continuous tense to describe an ongoing action in the past.",
    },
    {
      id: 26,
      question: "She ______ dinner when the power went out.",
      options: {
        a: "cooked",
        b: "was cooking",
        c: "cooking",
        d: "cook",
      },
      answer: "b",
      explanation:
        "The past continuous tense is used to describe an action in progress when another action interrupted it.",
    },
    {
      id: 27,
      question: "They ______ in the garden when it started raining.",
      options: {
        a: "were playing",
        b: "played",
        c: "was playing",
        d: "playing",
      },
      answer: "a",
      explanation:
        "This sentence is in the past continuous tense, indicating an ongoing action that was interrupted.",
    },
    {
      id: 28,
      question: "I ______ to music on my headphones.",
      options: {
        a: "was listening",
        b: "listened",
        c: "listen",
        d: "listening",
      },
      answer: "a",
      explanation:
        "The past continuous tense describes an action that was ongoing.",
    },
    {
      id: 29,
      question: "He ______ not paying attention during the class.",
      options: {
        a: "was",
        b: "is",
        c: "wasn't",
        d: "didn't",
      },
      answer: "c",
      explanation:
        "This sentence uses the negative form of the past continuous tense.",
    },
    {
      id: 30,
      question: "______ you ______ the piano at that time?",
      options: {
        a: "Were",
        b: "Was",
        c: "Did",
        d: "Are",
      },
      answer: "a",
      explanation:
        "This sentence is in the past continuous tense, asking about an ongoing action.",
    },
    {
      id: 31,
      question: "She ______ to her friend on the phone.",
      options: {
        a: "was talking",
        b: "talk",
        c: "talked",
        d: "is talking",
      },
      answer: "a",
      explanation:
        "This sentence is in the past continuous tense, indicating an ongoing action.",
    },
    {
      id: 32,
      question: "They ______ in the park when it got dark.",
      options: {
        a: "were running",
        b: "ran",
        c: "was running",
        d: "running",
      },
      answer: "a",
      explanation:
        "The past continuous tense describes an ongoing action that was interrupted.",
    },
    {
      id: 33,
      question: "I ______ not wearing my coat so I got cold.",
      options: {
        a: "was",
        b: "were",
        c: "wasn't",
        d: "didn't",
      },
      answer: "c",
      explanation:
        "This sentence uses the negative form of the past continuous tense.",
    },
    {
      id: 34,
      question: "She ______ coming to the party last Saturday.",
      options: {
        a: "wasn't",
        b: "was",
        c: "isn't",
        d: "didn't",
      },
      answer: "a",
      explanation:
        "The negative form indicates she did not attend, using past continuous tense.",
    },
    {
      id: 35,
      question: "______ you ______ on your assignment all day?",
      options: {
        a: "Were",
        b: "Was",
        c: "Did",
        d: "Are",
      },
      answer: "a",
      explanation:
        "This sentence is in the past continuous tense, asking about an ongoing action.",
    },
    {
      id: 36,
      question: "He ______ not sleeping well due to the noise.",
      options: {
        a: "was",
        b: "is",
        c: "wasn't",
        d: "didn't",
      },
      answer: "c",
      explanation:
        "The negative form indicates a lack of sleep, using past continuous tense.",
    },
    {
      id: 37,
      question: "What ______ you ______ when the earthquake occurred?",
      options: {
        a: "were",
        b: "was",
        c: "did",
        d: "are",
      },
      answer: "a",
      explanation:
        "This sentence is in the past continuous tense, asking about an ongoing action.",
    },
    {
      id: 38,
      question: "They ______ not playing video games in the evening.",
      options: {
        a: "were",
        b: "are",
        c: "wasn't",
        d: "didn't",
      },
      answer: "c",
      explanation:
        "The negative form indicates they did not engage in that activity, using past continuous tense.",
    },
    {
      id: 39,
      question: "______ she ______ a letter to her pen pal?",
      options: {
        a: "Was",
        b: "Were",
        c: "Did",
        d: "Is",
      },
      answer: "a",
      explanation:
        "This sentence is in the past continuous tense, asking about an ongoing action.",
    },
    {
      id: 40,
      question: "I ______ not feeling well during the trip.",
      options: {
        a: "was",
        b: "were",
        c: "am",
        d: "is",
      },
      answer: "a",
      explanation:
        "The negative form indicates a past state of being, using past continuous tense.",
    },
  ],
  // simplePast: [
  //   {
  //       id: 1,
  //       question: "I ______ Paris last summer.",
  //       options: {
  //           a: "visited",
  //           b: "have visited",
  //           c: "was visiting",
  //           d: "visit",
  //       },
  //       answer: "a",
  //       explanation: "This sentence is in the simple past tense, indicating an action completed in the past."
  //   },
  //   {
  //       id: 2,
  //       question: "She ______ dinner yesterday.",
  //       options: {
  //           a: "cooked",
  //           b: "has cooked",
  //           c: "was cooking",
  //           d: "cooking",
  //       },
  //       answer: "a",
  //       explanation: "The simple past tense shows that the action occurred and was completed in the past."
  //   },
  //   {
  //       id: 3,
  //       question: "They ______ football after school.",
  //       options: {
  //           a: "played",
  //           b: "have played",
  //           c: "were playing",
  //           d: "play",
  //       },
  //       answer: "a",
  //       explanation: "This sentence uses simple past tense to describe an action that occurred in the past."
  //   },
  //   {
  //       id: 4,
  //       question: "He ______ from college in 2020.",
  //       options: {
  //           a: "graduated",
  //           b: "has graduated",
  //           c: "was graduating",
  //           d: "graduate",
  //       },
  //       answer: "a",
  //       explanation: "The simple past tense indicates a completed action in the past."
  //   },
  //   {
  //       id: 5,
  //       question: "We ______ to Italy last year.",
  //       options: {
  //           a: "travelled",
  //           b: "have travelled",
  //           c: "were travelling",
  //           d: "travel",
  //       },
  //       answer: "a",
  //       explanation: "This sentence is in the simple past tense, indicating a past action."
  //   },
  //   {
  //       id: 6,
  //       question: "She ______ a great book last night.",
  //       options: {
  //           a: "read",
  //           b: "has read",
  //           c: "was reading",
  //           d: "reads",
  //       },
  //       answer: "a",
  //       explanation: "The simple past tense describes an action that was completed in the past."
  //   },
  //   {
  //       id: 7,
  //       question: "They ______ to the beach on Saturday.",
  //       options: {
  //           a: "went",
  //           b: "have gone",
  //           c: "were going",
  //           d: "go",
  //       },
  //       answer: "a",
  //       explanation: "This sentence uses simple past tense to describe a past action."
  //   },
  //   {
  //       id: 8,
  //       question: "I ______ that movie 2 days ago.",
  //       options: {
  //           a: "saw",
  //           b: "have seen",
  //           c: "was seeing",
  //           d: "see",
  //       },
  //       answer: "a",
  //       explanation: "The simple past tense indicates a completed action at a specific time in the past."
  //   },
  //   {
  //       id: 9,
  //       question: "She ______ in London as a child.",
  //       options: {
  //           a: "lived",
  //           b: "has lived",
  //           c: "was living",
  //           d: "live",
  //       },
  //       answer: "a",
  //       explanation: "This sentence is in the simple past tense, indicating a completed action in the past."
  //   },
  //   {
  //       id: 10,
  //       question: "We ______ at a conference last month.",
  //       options: {
  //           a: "met",
  //           b: "have met",
  //           c: "were meeting",
  //           d: "meet",
  //       },
  //       answer: "a",
  //       explanation: "The simple past tense shows that the action occurred in the past."
  //   },
  //   {
  //       id: 11,
  //       question: "She ______ at that company before.",
  //       options: {
  //           a: "worked",
  //           b: "has worked",
  //           c: "was working",
  //           d: "work",
  //       },
  //       answer: "a",
  //       explanation: "This sentence uses simple past tense to describe a past employment."
  //   },
  //   {
  //       id: 12,
  //       question: "I ______ lunch an hour ago.",
  //       options: {
  //           a: "ate",
  //           b: "have eaten",
  //           c: "was eating",
  //           d: "eat",
  //       },
  //       answer: "a",
  //       explanation: "The simple past tense indicates a completed action at a specific time in the past."
  //   },
  //   {
  //       id: 13,
  //       question: "They ______ the museum on Sunday.",
  //       options: {
  //           a: "visited",
  //           b: "have visited",
  //           c: "were visiting",
  //           d: "visit",
  //       },
  //       answer: "a",
  //       explanation: "This sentence uses simple past tense to describe a completed action."
  //   },
  //   {
  //       id: 14,
  //       question: "He ______ his homework yesterday.",
  //       options: {
  //           a: "finished",
  //           b: "has finished",
  //           c: "was finishing",
  //           d: "finish",
  //       },
  //       answer: "a",
  //       explanation: "The simple past tense indicates that the action was completed in the past."
  //   },
  //   {
  //       id: 15,
  //       question: "She ______ the house last week.",
  //       options: {
  //           a: "cleaned",
  //           b: "has cleaned",
  //           c: "was cleaning",
  //           d: "clean",
  //       },
  //       answer: "a",
  //       explanation: "This sentence is in the simple past tense, indicating a completed action in the past."
  //   },
  //   {
  //       id: 16,
  //       question: "We ______ all night at the party.",
  //       options: {
  //           a: "danced",
  //           b: "have danced",
  //           c: "were dancing",
  //           d: "dance",
  //       },
  //       answer: "a",
  //       explanation: "The simple past tense describes an action that was completed in the past."
  //   },
  //   {
  //       id: 17,
  //       question: "I ______ watch TV yesterday.",
  //       options: {
  //           a: "didn't",
  //           b: "don't",
  //           c: "wasn't",
  //           d: "hadn't",
  //       },
  //       answer: "a",
  //       explanation: "This sentence uses the negative form of simple past to indicate that the action did not occur."
  //   },
  //   {
  //       id: 18,
  //       question: "______ they ______ to the concert?",
  //       options: {
  //           a: "Did",
  //           b: "Do",
  //           c: "Are",
  //           d: "Had",
  //       },
  //       answer: "a",
  //       explanation: "This sentence is in the simple past tense, asking about a past event."
  //   },
  //   {
  //       id: 19,
  //       question: "She ______ call me back.",
  //       options: {
  //           a: "didn't",
  //           b: "doesn't",
  //           c: "wasn't",
  //           d: "hadn't",
  //       },
  //       answer: "a",
  //       explanation: "This sentence uses the negative form of simple past to indicate that the action did not happen."
  //   },
  //   {
  //       id: 20,
  //       question: "______ you ______ the accident?",
  //       options: {
  //           a: "Did",
  //           b: "Do",
  //           c: "Were",
  //           d: "Had",
  //       },
  //       answer: "a",
  //       explanation: "This sentence is in the simple past tense, asking about a past event."
  //   },
  // ],
  // pastContinuous: [
  //   {
  //       id: 21,
  //       question: "I ______ when he called.",
  //       options: {
  //           a: "was studying",
  //           b: "studied",
  //           c: "have studied",
  //           d: "study",
  //       },
  //       answer: "a",
  //       explanation: "This sentence is in the past continuous tense, indicating an ongoing action interrupted by another."
  //   },
  //   {
  //       id: 22,
  //       question: "She ______ a book all evening.",
  //       options: {
  //           a: "was reading",
  //           b: "read",
  //           c: "has read",
  //           d: "reads",
  //       },
  //       answer: "a",
  //       explanation: "The past continuous tense shows an action that was ongoing in the past."
  //   },
  //   {
  //       id: 23,
  //       question: "They ______ on the project yesterday.",
  //       options: {
  //           a: "were working",
  //           b: "worked",
  //           c: "have worked",
  //           d: "work",
  //       },
  //       answer: "a",
  //       explanation: "This sentence is in the past continuous tense, indicating an action that was ongoing in the past."
  //   },
  //   {
  //       id: 24,
  //       question: "He ______ to work at 8:00 a.m.",
  //       options: {
  //           a: "was driving",
  //           b: "drove",
  //           c: "has driven",
  //           d: "drive",
  //       },
  //       answer: "a",
  //       explanation: "The past continuous tense indicates an ongoing action in the past."
  //   },
  //   {
  //       id: 25,
  //       question: "We ______ a movie last night.",
  //       options: {
  //           a: "were watching",
  //           b: "watched",
  //           c: "have watched",
  //           d: "watch",
  //       },
  //       answer: "a",
  //       explanation: "This sentence uses past continuous tense to describe an action that was in progress."
  //   },
  //   {
  //       id: 26,
  //       question: "She ______ dinner when the power went out.",
  //       options: {
  //           a: "was cooking",
  //           b: "cooked",
  //           c: "has cooked",
  //           d: "cook",
  //       },
  //       answer: "a",
  //       explanation: "The past continuous tense indicates an ongoing action interrupted by another event."
  //   },
  //   {
  //       id: 27,
  //       question: "They ______ in the garden when it started raining.",
  //       options: {
  //           a: "were playing",
  //           b: "played",
  //           c: "have played",
  //           d: "play",
  //       },
  //       answer: "a",
  //       explanation: "This sentence is in the past continuous tense, indicating an action that was ongoing in the past."
  //   },
  //   {
  //       id: 28,
  //       question: "I ______ to music on my headphones.",
  //       options: {
  //           a: "was listening",
  //           b: "listened",
  //           c: "have listened",
  //           d: "listen",
  //       },
  //       answer: "a",
  //       explanation: "The past continuous tense shows an ongoing action in the past."
  //   },
  //   {
  //       id: 29,
  //       question: "He ______ paying attention during the class.",
  //       options: {
  //           a: "was not",
  //           b: "did not",
  //           c: "is not",
  //           d: "has not",
  //       },
  //       answer: "a",
  //       explanation: "This sentence uses past continuous tense in the negative form to indicate an ongoing action that did not occur."
  //   },
  //   {
  //       id: 30,
  //       question: "______ you ______ the piano at that time?",
  //       options: {
  //           a: "Were",
  //           b: "Did",
  //           c: "Are",
  //           d: "Had",
  //       },
  //       answer: "a",
  //       explanation: "This sentence is in the past continuous tense, asking about an ongoing action in the past."
  //   },
  //   {
  //       id: 31,
  //       question: "She ______ to her friend on the phone.",
  //       options: {
  //           a: "was talking",
  //           b: "talked",
  //           c: "has talked",
  //           d: "talk",
  //       },
  //       answer: "a",
  //       explanation: "The past continuous tense indicates an ongoing action in the past."
  //   },
  //   {
  //       id: 32,
  //       question: "They ______ in the park when it got dark.",
  //       options: {
  //           a: "were running",
  //           b: "ran",
  //           c: "have run",
  //           d: "run",
  //       },
  //       answer: "a",
  //       explanation: "This sentence uses past continuous tense to describe an action that was ongoing."
  //   },
  //   {
  //       id: 33,
  //       question: "I ______ wearing my coat so I got cold.",
  //       options: {
  //           a: "was not",
  //           b: "did not",
  //           c: "is not",
  //           d: "has not",
  //       },
  //       answer: "a",
  //       explanation: "This sentence uses past continuous tense in the negative form to indicate that an ongoing action did not occur."
  //   },
  //   {
  //       id: 34,
  //       question: "She ______ coming to the party last Saturday.",
  //       options: {
  //           a: "wasn't",
  //           b: "didn't",
  //           c: "isn't",
  //           d: "hasn't",
  //       },
  //       answer: "a",
  //       explanation: "The past continuous tense in the negative form indicates an ongoing action that did not occur."
  //   },
  //   {
  //       id: 35,
  //       question: "______ you ______ on your assignment all day?",
  //       options: {
  //           a: "Were",
  //           b: "Did",
  //           c: "Are",
  //           d: "Had",
  //       },
  //       answer: "a",
  //       explanation: "This sentence is in the past continuous tense, asking about an ongoing action in the past."
  //   },
  //   {
  //       id: 36,
  //       question: "He ______ sleeping well due to the noise.",
  //       options: {
  //           a: "was not",
  //           b: "did not",
  //           c: "is not",
  //           d: "has not",
  //       },
  //       answer: "a",
  //       explanation: "The past continuous tense in the negative form indicates that the action was not ongoing."
  //   },
  //   {
  //       id: 37,
  //       question: "What ______ you ______ when the earthquake occurred?",
  //       options: {
  //           a: "were",
  //           b: "did",
  //           c: "are",
  //           d: "had",
  //       },
  //       answer: "a",
  //       explanation: "This sentence is in the past continuous tense, asking about an ongoing action during an event."
  //   },
  //   {
  //       id: 38,
  //       question: "They ______ playing video games in the evening.",
  //       options: {
  //           a: "were not",
  //           b: "did not",
  //           c: "are not",
  //           d: "have not",
  //       },
  //       answer: "a",
  //       explanation: "This sentence uses past continuous tense in the negative form to indicate that the action did not occur."
  //   },
  //   {
  //       id: 39,
  //       question: "______ she ______ a letter to her pen pal?",
  //       options: {
  //           a: "Was",
  //           b: "Did",
  //           c: "Is",
  //           d: "Had",
  //       },
  //       answer: "a",
  //       explanation: "This sentence is in the past continuous tense, asking about an ongoing action in the past."
  //   },
  //   {
  //       id: 40,
  //       question: "I ______ feeling well during the trip.",
  //       options: {
  //           a: "was not",
  //           b: "did not",
  //           c: "is not",
  //           d: "has not",
  //       },
  //       answer: "a",
  //       explanation: "The past continuous tense in the negative form indicates that the action was not ongoing."
  //   },
  // ],
  pastPerfect: [
    { type: "past perfect" },
    {
      id: 1,
      question: "I ______ finished my homework when he called.",
      options: {
        a: "had",
        b: "has",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence uses the past perfect tense to indicate an action completed before another action in the past.",
    },
    {
      id: 2,
      question: "She ______ already left when I called her.",
      options: {
        a: "had",
        b: "has",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "The past perfect tense shows that her leaving occurred before my call.",
    },
    {
      id: 3,
      question: "They ______ eaten dinner before the movie started.",
      options: {
        a: "had",
        b: "has",
        c: "were",
        d: "are",
      },
      answer: "a",
      explanation:
        "This sentence uses past perfect to indicate the completion of dinner prior to the movie.",
    },
    {
      id: 4,
      question: "He ______ completed the project by the time I arrived.",
      options: {
        a: "had",
        b: "has",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "The past perfect tense indicates that the project was finished before my arrival.",
    },
    {
      id: 5,
      question: "We ______ already left the restaurant when the storm began.",
      options: {
        a: "had",
        b: "has",
        c: "were",
        d: "are",
      },
      answer: "a",
      explanation:
        "This sentence shows that we left the restaurant before the storm started.",
    },
    {
      id: 6,
      question: "She ______ read the book before the movie came out.",
      options: {
        a: "had",
        b: "has",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "The past perfect indicates she finished reading the book before the movie's release.",
    },
    {
      id: 7,
      question:
        "They ______ already left for the airport when we arrived at their house.",
      options: {
        a: "had",
        b: "has",
        c: "were",
        d: "are",
      },
      answer: "a",
      explanation:
        "This sentence shows they departed for the airport before we got to their house.",
    },
    {
      id: 8,
      question: "I ______ studied French before travelling to Paris.",
      options: {
        a: "had",
        b: "has",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "The past perfect tense indicates I learned French before my trip.",
    },
    {
      id: 9,
      question: "He ______ finished the race before it started raining.",
      options: {
        a: "had",
        b: "has",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence uses past perfect to indicate he completed the race prior to the rain.",
    },
    {
      id: 10,
      question:
        "We ______ already booked the tickets before the event was cancelled.",
      options: {
        a: "had",
        b: "has",
        c: "were",
        d: "are",
      },
      answer: "a",
      explanation:
        "The past perfect tense indicates that ticket booking occurred before the cancellation.",
    },
    {
      id: 11,
      question: "She ______ written the report before the meeting.",
      options: {
        a: "had",
        b: "has",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence shows that she completed the report before the meeting.",
    },
    {
      id: 12,
      question: "They ______ cooked dinner before the guests arrived.",
      options: {
        a: "had",
        b: "has",
        c: "were",
        d: "are",
      },
      answer: "a",
      explanation:
        "The past perfect indicates that dinner was prepared before the guests' arrival.",
    },
    {
      id: 13,
      question: "I ______ already prepared breakfast before you woke up.",
      options: {
        a: "had",
        b: "has",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence uses past perfect to show that breakfast was ready before your waking.",
    },
    {
      id: 14,
      question: "She ______ solved the puzzle before I could even try.",
      options: {
        a: "had",
        b: "has",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "The past perfect tense indicates she completed the puzzle before I attempted.",
    },
    {
      id: 15,
      question: "They ______ visited the museum before it closed.",
      options: {
        a: "had",
        b: "has",
        c: "were",
        d: "are",
      },
      answer: "a",
      explanation:
        "This sentence shows that their visit to the museum occurred before its closure.",
    },
    {
      id: 16,
      question: "He ______ fixed the car before we needed to use it.",
      options: {
        a: "had",
        b: "has",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "The past perfect tense indicates he repaired the car before its necessity.",
    },
    {
      id: 17,
      question: "We ______ cleaned the house before the party.",
      options: {
        a: "had",
        b: "has",
        c: "were",
        d: "are",
      },
      answer: "a",
      explanation:
        "This sentence uses past perfect to show cleaning was done prior to the party.",
    },
    {
      id: 18,
      question:
        "She ______ returned the library books before they were overdue.",
      options: {
        a: "had",
        b: "has",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "The past perfect tense indicates she returned the books before their due date.",
    },
    {
      id: 19,
      question:
        "They ______ taken the dog for a walk before it started raining.",
      options: {
        a: "had",
        b: "has",
        c: "were",
        d: "are",
      },
      answer: "a",
      explanation:
        "This sentence shows that the dog was walked before the rain began.",
    },
    {
      id: 20,
      question: "I ______ submitted my application before the deadline.",
      options: {
        a: "had",
        b: "has",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "The past perfect tense indicates that my application was submitted prior to the deadline.",
    },
  ],
  pastPerfectContinuous: [
    { type: "past perfect Continuous" },
    {
      id: 1,
      question: "I ______ been studying for hours when he called.",
      options: {
        a: "had",
        b: "have",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "The past perfect continuous indicates that the studying started before the call.",
    },
    {
      id: 2,
      question: "She ______ been playing the piano all evening.",
      options: {
        a: "had",
        b: "have",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence shows that her piano playing started before the evening ended.",
    },
    {
      id: 3,
      question: "They ______ been working on the project all day yesterday.",
      options: {
        a: "had",
        b: "have",
        c: "were",
        d: "is",
      },
      answer: "a",
      explanation:
        "The past perfect continuous indicates that their work on the project started earlier in the day.",
    },
    {
      id: 4,
      question: "He ______ been fishing by the lake for most of the morning.",
      options: {
        a: "had",
        b: "have",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence indicates that his fishing began before the morning was over.",
    },
    {
      id: 5,
      question:
        "We ______ been waiting at the airport for hours before the flight was cancelled.",
      options: {
        a: "had",
        b: "have",
        c: "were",
        d: "is",
      },
      answer: "a",
      explanation:
        "The past perfect continuous indicates that the waiting started before the flight cancellation.",
    },
    {
      id: 6,
      question:
        "She ______ been practicing the guitar for weeks before the concert.",
      options: {
        a: "had",
        b: "have",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "This shows that her guitar practice began prior to the concert.",
    },
    {
      id: 7,
      question:
        "They ______ been discussing the issue for a long time before reaching a decision.",
      options: {
        a: "had",
        b: "have",
        c: "were",
        d: "is",
      },
      answer: "a",
      explanation:
        "The past perfect continuous shows that their discussion started before the decision was made.",
    },
    {
      id: 8,
      question:
        "I ______ been living in the city for 3 years before I moved to the countryside.",
      options: {
        a: "had",
        b: "have",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence indicates that my time in the city began before the move.",
    },
    {
      id: 9,
      question:
        "She ______ been dancing at the club all night before she got tired.",
      options: {
        a: "had",
        b: "have",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "The past perfect continuous indicates that her dancing started before she felt tired.",
    },
    {
      id: 10,
      question: "They ______ been travelling across Europe for months.",
      options: {
        a: "had",
        b: "have",
        c: "were",
        d: "is",
      },
      answer: "a",
      explanation:
        "This shows that their travels began before the months ended.",
    },
    {
      id: 11,
      question:
        "I ______ been attending the same school for years before we moved.",
      options: {
        a: "had",
        b: "have",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "The past perfect continuous shows that my school attendance started before the move.",
    },
    {
      id: 12,
      question:
        "She ______ been working on the novel for several months before finishing it.",
      options: {
        a: "had",
        b: "have",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "This indicates that her work on the novel started before she completed it.",
    },
    {
      id: 13,
      question:
        "He ______ been studying medicine for a decade before becoming a doctor.",
      options: {
        a: "had",
        b: "have",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "The past perfect continuous shows that his studies began long before he became a doctor.",
    },
    {
      id: 14,
      question:
        "We ______ been renovating the old house for weeks before it was ready to move in.",
      options: {
        a: "had",
        b: "have",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "This indicates that the renovation process began before the house was ready.",
    },
    {
      id: 15,
      question:
        "They ______ been skiing in the mountains for a few hours when the storm hit.",
      options: {
        a: "had",
        b: "have",
        c: "were",
        d: "is",
      },
      answer: "a",
      explanation:
        "The past perfect continuous shows that their skiing started before the storm hit.",
    },
    {
      id: 16,
      question:
        "I ______ been volunteering at the shelter for a year before I got a paid job there.",
      options: {
        a: "had",
        b: "have",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "This indicates that my volunteering began before I received a job.",
    },
    {
      id: 17,
      question:
        "She ______ been practicing yoga for years before becoming an instructor.",
      options: {
        a: "had",
        b: "have",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "The past perfect continuous shows that her yoga practice started before she became an instructor.",
    },
    {
      id: 18,
      question:
        "They ______ been painting the living room for the entire weekend.",
      options: {
        a: "had",
        b: "have",
        c: "were",
        d: "is",
      },
      answer: "a",
      explanation:
        "This sentence indicates that their painting activity started before the weekend ended.",
    },
    {
      id: 19,
      question: "He ______ been growing vegetables in his garden for months.",
      options: {
        a: "had",
        b: "have",
        c: "was",
        d: "is",
      },
      answer: "a",
      explanation:
        "The past perfect continuous shows that his gardening started before the months ended.",
    },
    {
      id: 20,
      question:
        "We ______ been waiting for the bus for half an hour before it finally arrived.",
      options: {
        a: "had",
        b: "have",
        c: "were",
        d: "is",
      },
      answer: "a",
      explanation:
        "This indicates that our waiting began before the bus arrived.",
    },
  ],

  futureSimple: [
    { type: "future simple" },
    {
      id: 61,
      question: "I ______ go to the party tomorrow.",
      options: {
        a: "will",
        b: "was",
        c: "is",
        d: "have",
      },
      answer: "a",
      explanation:
        "The future simple tense indicates an action that will take place in the future.",
    },
    {
      id: 62,
      question: "She ______ call you later.",
      options: {
        a: "will",
        b: "was",
        c: "is",
        d: "has",
      },
      answer: "a",
      explanation:
        "This sentence uses future simple tense to indicate an action that will happen.",
    },
    {
      id: 63,
      question: "They ______ arrive at 6 p.m.",
      options: {
        a: "will",
        b: "was",
        c: "is",
        d: "have",
      },
      answer: "a",
      explanation:
        "The future simple tense shows that an action will take place at a specified time.",
    },
    {
      id: 64,
      question: "He ______ finish his homework tonight.",
      options: {
        a: "will",
        b: "was",
        c: "is",
        d: "has",
      },
      answer: "a",
      explanation:
        "This sentence is in the future simple tense, indicating an action that will happen.",
    },
    {
      id: 65,
      question: "We ______ see you next week.",
      options: {
        a: "will",
        b: "was",
        c: "is",
        d: "have",
      },
      answer: "a",
      explanation:
        "The future simple tense indicates an action that will occur in the future.",
    },
    {
      id: 66,
      question: "She ______ not attend the meeting tomorrow.",
      options: {
        a: "will",
        b: "was",
        c: "is",
        d: "has",
      },
      answer: "a",
      explanation:
        "This sentence uses future simple tense in the negative form to indicate an action that will not happen.",
    },
    {
      id: 67,
      question: "______ you ______ help me with this task?",
      options: {
        a: "Will",
        b: "Was",
        c: "Is",
        d: "Has",
      },
      answer: "a",
      explanation:
        "This sentence is in the future simple tense, asking about an action that will happen.",
    },
    {
      id: 68,
      question: "I ______ go shopping tomorrow.",
      options: {
        a: "will",
        b: "was",
        c: "is",
        d: "have",
      },
      answer: "a",
      explanation:
        "The future simple tense indicates an action that will take place in the future.",
    },
    {
      id: 69,
      question: "They ______ travel to France next month.",
      options: {
        a: "will",
        b: "was",
        c: "is",
        d: "have",
      },
      answer: "a",
      explanation:
        "This sentence uses future simple tense to indicate an action that will happen.",
    },
    {
      id: 70,
      question: "He ______ help you with that project.",
      options: {
        a: "will",
        b: "was",
        c: "is",
        d: "has",
      },
      answer: "a",
      explanation:
        "The future simple tense indicates an action that will happen in the future.",
    },
    {
      id: 71,
      question: "We ______ meet at the café later.",
      options: {
        a: "will",
        b: "was",
        c: "is",
        d: "have",
      },
      answer: "a",
      explanation:
        "This sentence is in the future simple tense, indicating an action that will happen.",
    },
    {
      id: 72,
      question: "She ______ not come to the party.",
      options: {
        a: "will",
        b: "was",
        c: "is",
        d: "has",
      },
      answer: "a",
      explanation:
        "This sentence uses future simple tense in the negative form to indicate an action that will not happen.",
    },
    {
      id: 73,
      question: "______ they ______ finish their work by tomorrow?",
      options: {
        a: "Will",
        b: "Was",
        c: "Is",
        d: "Has",
      },
      answer: "a",
      explanation:
        "This sentence is in the future simple tense, asking about the completion of an action.",
    },
    {
      id: 74,
      question: "I ______ start my new job next week.",
      options: {
        a: "will",
        b: "was",
        c: "is",
        d: "have",
      },
      answer: "a",
      explanation:
        "The future simple tense indicates an action that will take place in the future.",
    },
    {
      id: 75,
      question: "They ______ not attend the event next month.",
      options: {
        a: "will",
        b: "was",
        c: "is",
        d: "has",
      },
      answer: "a",
      explanation:
        "This sentence uses future simple tense in the negative form to indicate an action that will not happen.",
    },
    {
      id: 76,
      question: "She ______ help with the preparations.",
      options: {
        a: "will",
        b: "was",
        c: "is",
        d: "has",
      },
      answer: "a",
      explanation:
        "The future simple tense indicates an action that will happen in the future.",
    },
    {
      id: 77,
      question: "We ______ finish the project next week.",
      options: {
        a: "will",
        b: "was",
        c: "is",
        d: "have",
      },
      answer: "a",
      explanation:
        "This sentence is in the future simple tense, indicating an action that will happen.",
    },
    {
      id: 78,
      question: "______ you ______ join us for dinner tomorrow?",
      options: {
        a: "Will",
        b: "Was",
        c: "Is",
        d: "Has",
      },
      answer: "a",
      explanation:
        "This sentence is in the future simple tense, asking about an action that will happen.",
    },
    {
      id: 79,
      question: "He ______ not go to the meeting.",
      options: {
        a: "will",
        b: "was",
        c: "is",
        d: "has",
      },
      answer: "a",
      explanation:
        "This sentence uses future simple tense in the negative form to indicate an action that will not happen.",
    },
    {
      id: 80,
      question: "I ______ study for the exam tonight.",
      options: {
        a: "will",
        b: "was",
        c: "is",
        d: "have",
      },
      answer: "a",
      explanation:
        "The future simple tense indicates an action that will take place in the future.",
    },
  ],
  futureContinuous: [
    { type: "future continous" },
    {
      id: 1,
      question: "I ______ be studying when you arrive.",
      options: {
        a: "will",
        b: "would",
        c: "am",
        d: "have",
      },
      answer: "a",
      explanation:
        "The future continuous tense indicates that studying will be ongoing at the time of arrival.",
    },
    {
      id: 2,
      question: "She ______ be working late tonight.",
      options: {
        a: "will",
        b: "would",
        c: "is",
        d: "has",
      },
      answer: "a",
      explanation:
        "This sentence shows that her working will be in progress during tonight.",
    },
    {
      id: 3,
      question: "They ______ be playing football at the park.",
      options: {
        a: "will",
        b: "would",
        c: "are",
        d: "have",
      },
      answer: "a",
      explanation:
        "The future continuous indicates that their football playing will happen in the future.",
    },
    {
      id: 4,
      question: "He ______ be driving to work at that time.",
      options: {
        a: "will",
        b: "would",
        c: "is",
        d: "has",
      },
      answer: "a",
      explanation:
        "This shows that his driving will be ongoing at the specified future time.",
    },
    {
      id: 5,
      question: "We ______ be having dinner when you call.",
      options: {
        a: "will",
        b: "would",
        c: "are",
        d: "have",
      },
      answer: "a",
      explanation:
        "The future continuous indicates that having dinner will be happening during the call.",
    },
    {
      id: 6,
      question: "She ______ be attending a conference next week.",
      options: {
        a: "will",
        b: "would",
        c: "is",
        d: "has",
      },
      answer: "a",
      explanation:
        "This shows that her attendance at the conference will be in progress next week.",
    },
    {
      id: 7,
      question: "They ______ be traveling to Italy during the summer.",
      options: {
        a: "will",
        b: "would",
        c: "are",
        d: "have",
      },
      answer: "a",
      explanation:
        "The future continuous indicates that their traveling will be ongoing in the summer.",
    },
    {
      id: 8,
      question: "I ______ be waiting for you at the café.",
      options: {
        a: "will",
        b: "would",
        c: "am",
        d: "have",
      },
      answer: "a",
      explanation: "This shows that my waiting will happen at the café.",
    },
    {
      id: 9,
      question: "He ______ be watching the game on TV.",
      options: {
        a: "will",
        b: "would",
        c: "is",
        d: "has",
      },
      answer: "a",
      explanation:
        "The future continuous indicates that his watching will be ongoing while the game is on.",
    },
    {
      id: 10,
      question: "We ______ be relaxing at the beach next month.",
      options: {
        a: "will",
        b: "would",
        c: "are",
        d: "have",
      },
      answer: "a",
      explanation:
        "This shows that our relaxing will be happening at the beach.",
    },
    {
      id: 11,
      question: "She ______ not be working on the project tomorrow.",
      options: {
        a: "will",
        b: "would",
        c: "is",
        d: "has",
      },
      answer: "a",
      explanation:
        "This indicates that she will not be engaged in working on the project tomorrow.",
    },
    {
      id: 12,
      question: "They ______ not be attending the meeting next week.",
      options: {
        a: "will",
        b: "would",
        c: "are",
        d: "have",
      },
      answer: "a",
      explanation:
        "This shows that their attendance at the meeting will not be happening.",
    },
    {
      id: 13,
      question: "Will you ______ coming to the party later?",
      options: {
        a: "be",
        b: "was",
        c: "is",
        d: "are",
      },
      answer: "a",
      explanation:
        "This is a question about whether your attendance at the party will happen later.",
    },
    {
      id: 14,
      question: "What ______ you be doing at this time tomorrow?",
      options: {
        a: "will",
        b: "would",
        c: "are",
        d: "have",
      },
      answer: "a",
      explanation:
        "This asks about your activity that will be ongoing at a specific future time.",
    },
    {
      id: 15,
      question: "They ______ not be playing video games this weekend.",
      options: {
        a: "will",
        b: "would",
        c: "are",
        d: "have",
      },
      answer: "a",
      explanation:
        "This indicates that they will not be engaged in playing video games this weekend.",
    },
    {
      id: 16,
      question: "He ______ be reading a book in the evening.",
      options: {
        a: "will",
        b: "would",
        c: "is",
        d: "has",
      },
      answer: "a",
      explanation:
        "The future continuous indicates that his reading will be happening in the evening.",
    },
    {
      id: 17,
      question: "We ______ be visiting friends next Saturday.",
      options: {
        a: "will",
        b: "would",
        c: "are",
        d: "have",
      },
      answer: "a",
      explanation:
        "This shows that our visit to friends will be happening next Saturday.",
    },
    {
      id: 18,
      question: "I ______ be exercising at the gym tomorrow morning.",
      options: {
        a: "will",
        b: "would",
        c: "am",
        d: "have",
      },
      answer: "a",
      explanation:
        "The future continuous indicates that my exercising will be happening tomorrow morning.",
    },
    {
      id: 19,
      question: "Will she ______ studying for her exams tonight?",
      options: {
        a: "be",
        b: "was",
        c: "is",
        d: "are",
      },
      answer: "a",
      explanation: "This asks about her studying that will be ongoing tonight.",
    },
    {
      id: 20,
      question: "They ______ be eating out for dinner.",
      options: {
        a: "will",
        b: "would",
        c: "are",
        d: "have",
      },
      answer: "a",
      explanation:
        "This shows that their dinner plans will involve eating out.",
    },
  ],
  futurePerfect: [
    { type: "future perfect" },
    {
      id: 1,
      question: "I ______ completed my assignment by Friday.",
      options: {
        a: "will have",
        b: "am",
        c: "was",
        d: "have been",
      },
      answer: "a",
      explanation:
        "The future perfect tense indicates that the assignment will be completed before Friday.",
    },
    {
      id: 2,
      question: "She ______ finished her project by next week.",
      options: {
        a: "will have",
        b: "is",
        c: "was",
        d: "has been",
      },
      answer: "a",
      explanation: "This shows she will finish the project before next week.",
    },
    {
      id: 3,
      question: "They ______ arrived by noon.",
      options: {
        a: "will have",
        b: "are",
        c: "were",
        d: "have been",
      },
      answer: "a",
      explanation: "Indicates their arrival will occur by noon.",
    },
    {
      id: 4,
      question: "He ______ graduated by the end of the year.",
      options: {
        a: "will have",
        b: "is",
        c: "was",
        d: "has been",
      },
      answer: "a",
      explanation: "Indicates he will complete his graduation by then.",
    },
    {
      id: 5,
      question: "We ______ traveled to five countries by the end of the trip.",
      options: {
        a: "will have",
        b: "are",
        c: "were",
        d: "have been",
      },
      answer: "a",
      explanation: "Shows completion of travel plans.",
    },
    {
      id: 6,
      question: "She ______ read that book before the exam.",
      options: {
        a: "will have",
        b: "is",
        c: "was",
        d: "has been",
      },
      answer: "a",
      explanation: "Indicates she will finish reading before the exam.",
    },
    {
      id: 7,
      question: "They ______ eaten dinner by the time we arrive.",
      options: {
        a: "will have",
        b: "are",
        c: "were",
        d: "have been",
      },
      answer: "a",
      explanation: "Indicates that dinner will be completed upon arrival.",
    },
    {
      id: 8,
      question: "I ______ saved enough money for a new car.",
      options: {
        a: "will have",
        b: "am",
        c: "was",
        d: "have been",
      },
      answer: "a",
      explanation: "Indicates that savings will be complete by that time.",
    },
    {
      id: 9,
      question: "He ______ worked at the company for ten years next month.",
      options: {
        a: "will have",
        b: "is",
        c: "was",
        d: "has been",
      },
      answer: "a",
      explanation: "Shows his time at the company will reach ten years.",
    },
    {
      id: 10,
      question: "We ______ painted the house by the time the guests arrive.",
      options: {
        a: "will have",
        b: "are",
        c: "were",
        d: "have been",
      },
      answer: "a",
      explanation: "Indicates completion of painting before guests arrive.",
    },
    {
      id: 11,
      question: "She ______ not have finished her report by then.",
      options: {
        a: "will",
        b: "is",
        c: "was",
        d: "has been",
      },
      answer: "a",
      explanation: "Indicates she will not complete her report.",
    },
    {
      id: 12,
      question: "They ______ not have completed the project on time.",
      options: {
        a: "will",
        b: "are",
        c: "were",
        d: "have been",
      },
      answer: "a",
      explanation: "Shows the project won't be finished by the deadline.",
    },
    {
      id: 13,
      question: "______ you have returned by 8 p.m.?",
      options: {
        a: "Will",
        b: "Are",
        c: "Were",
        d: "Have",
      },
      answer: "a",
      explanation: "Asks if you will return by that time.",
    },
    {
      id: 14,
      question: "What ______ you have accomplished by the end of the year?",
      options: {
        a: "will",
        b: "are",
        c: "were",
        d: "have been",
      },
      answer: "a",
      explanation: "Inquires about future achievements.",
    },
    {
      id: 15,
      question: "He ______ not have solved the problem yet.",
      options: {
        a: "will",
        b: "is",
        c: "was",
        d: "has been",
      },
      answer: "a",
      explanation: "Indicates that the problem remains unresolved.",
    },
    {
      id: 16,
      question: "We ______ learned a lot by the end of the course.",
      options: {
        a: "will have",
        b: "are",
        c: "were",
        d: "have been",
      },
      answer: "a",
      explanation: "Indicates knowledge gained by the end of the course.",
    },
    {
      id: 17,
      question: "I ______ cooked dinner by the time you get home.",
      options: {
        a: "will have",
        b: "am",
        c: "was",
        d: "have been",
      },
      answer: "a",
      explanation: "Shows that dinner will be prepared before your arrival.",
    },
    {
      id: 18,
      question: "______ she have graduated before her birthday?",
      options: {
        a: "Will",
        b: "Is",
        c: "Was",
        d: "Has",
      },
      answer: "a",
      explanation: "Inquires about her graduation timing.",
    },
    {
      id: 19,
      question: "They ______ moved to a new house by next month.",
      options: {
        a: "will have",
        b: "are",
        c: "were",
        d: "have been",
      },
      answer: "a",
      explanation: "Indicates completion of moving plans.",
    },
    {
      id: 20,
      question: "I ______ read that book by next week.",
      options: {
        a: "will have",
        b: "am",
        c: "was",
        d: "have been",
      },
      answer: "a",
      explanation: "Shows completion of reading plans.",
    },
  ],
  futurePerfectContinuous: [
    { type: "future perfect continous" },
    {
      id: 1,
      question: "I ______ been studying for three hours by noon.",
      options: {
        a: "will have",
        b: "am",
        c: "was",
        d: "have been",
      },
      answer: "a",
      explanation:
        "Indicates that studying will be ongoing for a specified duration.",
    },
    {
      id: 2,
      question:
        "She ______ been working at the company for five years by next month.",
      options: {
        a: "will have",
        b: "is",
        c: "was",
        d: "has been",
      },
      answer: "a",
      explanation: "Indicates that her employment will reach five years.",
    },
    {
      id: 3,
      question:
        "They ______ been playing football for two hours by the time we arrive.",
      options: {
        a: "will have",
        b: "are",
        c: "were",
        d: "have been",
      },
      answer: "a",
      explanation: "Indicates ongoing play that will continue until arrival.",
    },
    {
      id: 4,
      question:
        "He ______ been driving for six hours by the time he gets home.",
      options: {
        a: "will have",
        b: "is",
        c: "was",
        d: "has been",
      },
      answer: "a",
      explanation:
        "Indicates the duration of driving leading up to his arrival.",
    },
    {
      id: 5,
      question: "We ______ been waiting for an hour when the bus arrives.",
      options: {
        a: "will have",
        b: "are",
        c: "were",
        d: "have been",
      },
      answer: "a",
      explanation: "Indicates the waiting period before the bus arrives.",
    },
    {
      id: 6,
      question: "She ______ been practicing for weeks before the concert.",
      options: {
        a: "will have",
        b: "is",
        c: "was",
        d: "has been",
      },
      answer: "a",
      explanation: "Shows ongoing practice leading up to the concert.",
    },
    {
      id: 7,
      question:
        "They ______ been traveling for days by the time they reach their destination.",
      options: {
        a: "will have",
        b: "are",
        c: "were",
        d: "have been",
      },
      answer: "a",
      explanation: "Indicates the duration of their travel until arrival.",
    },
    {
      id: 8,
      question: "I ______ been working on this project for months.",
      options: {
        a: "will have",
        b: "am",
        c: "was",
        d: "have been",
      },
      answer: "a",
      explanation: "Indicates an ongoing effort for an extended period.",
    },
    {
      id: 9,
      question: "He ______ been watching TV for four hours straight.",
      options: {
        a: "will have",
        b: "is",
        c: "was",
        d: "has been",
      },
      answer: "a",
      explanation: "Indicates continuous viewing for a specified duration.",
    },
    {
      id: 10,
      question: "We ______ been discussing the issue for hours.",
      options: {
        a: "will have",
        b: "are",
        c: "were",
        d: "have been",
      },
      answer: "a",
      explanation: "Indicates ongoing discussion over an extended time.",
    },
    {
      id: 11,
      question: "She ______ not have been studying for the exam by then.",
      options: {
        a: "will",
        b: "is",
        c: "was",
        d: "has been",
      },
      answer: "a",
      explanation: "Indicates she will not have engaged in study.",
    },
    {
      id: 12,
      question:
        "They ______ not have been practicing enough for the competition.",
      options: {
        a: "will",
        b: "are",
        c: "were",
        d: "have been",
      },
      answer: "a",
      explanation: "Shows lack of preparation for the competition.",
    },
    {
      id: 13,
      question: "______ you have been living here for a year by next month?",
      options: {
        a: "Will",
        b: "Are",
        c: "Were",
        d: "Have",
      },
      answer: "a",
      explanation: "Inquires about the duration of residence.",
    },
    {
      id: 14,
      question: "What ______ you have been doing for the past three hours?",
      options: {
        a: "will",
        b: "are",
        c: "were",
        d: "have been",
      },
      answer: "a",
      explanation: "Inquires about activities over the past time frame.",
    },
    {
      id: 15,
      question: "He ______ not have been exercising regularly.",
      options: {
        a: "will",
        b: "is",
        c: "was",
        d: "has been",
      },
      answer: "a",
      explanation: "Indicates lack of consistent exercise.",
    },
    {
      id: 16,
      question: "We ______ have been working together for a long time.",
      options: {
        a: "will",
        b: "are",
        c: "were",
        d: "have been",
      },
      answer: "a",
      explanation: "Indicates a long duration of collaboration.",
    },
    {
      id: 17,
      question:
        "I ______ have been cleaning the house for two hours when you arrive.",
      options: {
        a: "will",
        b: "am",
        c: "was",
        d: "have been",
      },
      answer: "a",
      explanation: "Indicates ongoing cleaning until your arrival.",
    },
    {
      id: 18,
      question: "______ she have been taking care of the baby all day?",
      options: {
        a: "Will",
        b: "Is",
        c: "Was",
        d: "Has",
      },
      answer: "a",
      explanation: "Inquires about her activity regarding the baby.",
    },
    {
      id: 19,
      question: "They ______ been waiting for the train for half an hour.",
      options: {
        a: "will have",
        b: "are",
        c: "were",
        d: "have been",
      },
      answer: "a",
      explanation: "Indicates ongoing waiting period until train's arrival.",
    },
    {
      id: 20,
      question: "I ______ have been reading that book for weeks.",
      options: {
        a: "will",
        b: "am",
        c: "was",
        d: "have been",
      },
      answer: "a",
      explanation: "Indicates ongoing reading over an extended period.",
    },
  ],
};

// ------------------------------ combine tenses------------------------------
export const listAll12TensesMixMcqs = [
  {
    question: "I ______ up at 6.00 a.m. every morning.",
    options: {
      a: "woke",
      b: "wake",
      c: "am waking",
      d: "will wake",
    },
    answer: "b",
    explanation:
      "This sentence is in the simple present tense, indicating a habitual action that occurs regularly every morning.",
  },
  {
    question: "She ______ English at a local school.",
    options: {
      a: "teached",
      b: "teach",
      c: "teaches",
      d: "is teaching",
    },
    answer: "c",
    explanation:
      "The sentence uses simple present tense to describe a regular action.",
  },
  {
    question: "They ______ playing football on weekends.",
    options: {
      a: "enjoyed",
      b: "enjoy",
      c: "enjoying",
      d: "are enjoying",
    },
    answer: "b",
    explanation:
      "This sentence is in the simple present tense, indicating a regular activity.",
  },
  {
    question: "He ______ in a hospital as a nurse.",
    options: {
      a: "work",
      b: "works",
      c: "worked",
      d: "is working",
    },
    answer: "b",
    explanation:
      "This sentence is in the simple present tense, describing a job.",
  },
  {
    question: "The sun ______ in the east.",
    options: {
      a: "rise",
      b: "rises",
      c: "rose",
      d: "is rising",
    },
    answer: "b",
    explanation: "The sentence uses simple present tense to state a fact.",
  },
  {
    question: "Dogs ______ loudly when strangers approach.",
    options: {
      a: "bark",
      b: "barking",
      c: "barked",
      d: "barks",
    },
    answer: "a",
    explanation:
      "This sentence is in the simple present tense, indicating a habitual action.",
  },
  {
    question: "My father ______ the newspaper daily.",
    options: {
      a: "read",
      b: "reads",
      c: "reading",
      d: "is reading",
    },
    answer: "b",
    explanation:
      "The sentence uses simple present tense to describe a routine activity.",
  },
  {
    question: "We ______ in a quiet neighbourhood.",
    options: {
      a: "live",
      b: "lives",
      c: "living",
      d: "lived",
    },
    answer: "a",
    explanation:
      "This sentence is in the simple present tense, indicating a permanent situation.",
  },
  {
    question: "The earth ______ around the sun.",
    options: {
      a: "revolve",
      b: "revolves",
      c: "revolved",
      d: "is revolving",
    },
    answer: "b",
    explanation:
      "This sentence is in the simple present tense, stating a scientific fact.",
  },
  {
    question: "She ______ visits her grandparents.",
    options: {
      a: "often",
      b: "oftens",
      c: "is often",
      d: "visited",
    },
    answer: "a",
    explanation:
      "The adverb 'often' is used with the simple present tense to describe frequency.",
  },
  {
    question: "The train ______ at 9 a.m.",
    options: {
      a: "depart",
      b: "departs",
      c: "departed",
      d: "is departing",
    },
    answer: "b",
    explanation:
      "This sentence is in the simple present tense, indicating a scheduled event.",
  },
  {
    question: "He ______ drinks tea for breakfast.",
    options: {
      a: "usually",
      b: "usual",
      c: "used",
      d: "is usual",
    },
    answer: "a",
    explanation: "The adverb 'usually' modifies the simple present tense verb.",
  },
  {
    question: "It ______ a lot during the monsoon season.",
    options: {
      a: "rain",
      b: "rains",
      c: "rained",
      d: "is raining",
    },
    answer: "b",
    explanation:
      "This sentence is in the simple present tense, indicating a seasonal pattern.",
  },
  {
    question: "My mum ______ delicious meals.",
    options: {
      a: "cook",
      b: "cooked",
      c: "cooks",
      d: "is cooking",
    },
    answer: "c",
    explanation:
      "The sentence uses simple present tense to indicate a habitual action.",
  },
  {
    question: "Cats ______ when they are content.",
    options: {
      a: "purr",
      b: "purred",
      c: "are purring",
      d: "purring",
    },
    answer: "a",
    explanation:
      "This sentence is in the simple present tense, describing a behavior.",
  },
  {
    question: "They ______ like spicy food.",
    options: {
      a: "don't",
      b: "doesn't",
      c: "didn't",
      d: "are not",
    },
    answer: "a",
    explanation:
      "This sentence is in the simple present tense, indicating a preference.",
  },
  {
    question: "We ______ the same school.",
    options: {
      a: "attend",
      b: "attended",
      c: "attending",
      d: "are attending",
    },
    answer: "a",
    explanation:
      "The sentence uses simple present tense to describe a current situation.",
  },
  {
    question: "The company ______ for business at 8 a.m.",
    options: {
      a: "open",
      b: "opens",
      c: "opened",
      d: "is opening",
    },
    answer: "b",
    explanation:
      "This sentence is in the simple present tense, indicating a routine operation.",
  },
  {
    question: "Birds ______ in the morning.",
    options: {
      a: "sing",
      b: "sang",
      c: "sings",
      d: "are singing",
    },
    answer: "a",
    explanation:
      "This sentence is in the simple present tense, describing a natural occurrence.",
  },
  {
    question: "I ______ tennis every Sunday.",
    options: {
      a: "play",
      b: "plays",
      c: "playing",
      d: "played",
    },
    answer: "a",
    explanation:
      "The sentence uses simple present tense to indicate a regular activity.",
  },
  {
    question: "I ______ a book right now.",
    options: {
      a: "read",
      b: "am reading",
      c: "reads",
      d: "is reading",
    },
    answer: "b",
    explanation:
      "This sentence is in the present continuous tense, indicating an action happening now.",
  },
  {
    question: "She ______ dinner for her family.",
    options: {
      a: "is cooking",
      b: "cooks",
      c: "cooked",
      d: "cook",
    },
    answer: "a",
    explanation:
      "The present continuous tense is used to describe an action currently in progress.",
  },
  {
    question: "They ______ basketball in the park.",
    options: {
      a: "are playing",
      b: "played",
      c: "playing",
      d: "is playing",
    },
    answer: "a",
    explanation:
      "This sentence is in the present continuous tense, indicating an action happening right now.",
  },
  {
    question: "He ______ a movie at the cinema.",
    options: {
      a: "is watching",
      b: "watches",
      c: "watched",
      d: "watch",
    },
    answer: "a",
    explanation:
      "This sentence is in the present continuous tense, indicating an ongoing action.",
  },
  {
    question: "We ______ for our final exams.",
    options: {
      a: "are studying",
      b: "studies",
      c: "study",
      d: "is studying",
    },
    answer: "a",
    explanation:
      "The present continuous tense describes an action currently being undertaken.",
  },
  {
    question: "The baby ______ in the crib.",
    options: {
      a: "is sleeping",
      b: "sleep",
      c: "sleeps",
      d: "sleeping",
    },
    answer: "a",
    explanation:
      "This sentence is in the present continuous tense, indicating an action currently taking place.",
  },
  {
    question: "It ______ outside.",
    options: {
      a: "is raining",
      b: "rains",
      c: "rained",
      d: "rain",
    },
    answer: "a",
    explanation:
      "The present continuous tense is used to describe weather conditions currently occurring.",
  },
  {
    question: "She ______ on a new project.",
    options: {
      a: "is working",
      b: "works",
      c: "worked",
      d: "working",
    },
    answer: "a",
    explanation:
      "This sentence is in the present continuous tense, indicating an ongoing action.",
  },
  {
    question: "I ______ my best friend at the moment.",
    options: {
      a: "am visiting",
      b: "visit",
      c: "visited",
      d: "visiting",
    },
    answer: "a",
    explanation:
      "This sentence is in the present continuous tense, indicating an action happening now.",
  },
  {
    question: "They ______ for a trip next month.",
    options: {
      a: "are preparing",
      b: "prepared",
      c: "prepare",
      d: "preparing",
    },
    answer: "a",
    explanation:
      "This sentence is in the present continuous tense, describing a current preparation.",
  },
  {
    question: "He ______ his guitar right now.",
    options: {
      a: "is playing",
      b: "plays",
      c: "play",
      d: "played",
    },
    answer: "a",
    explanation:
      "This sentence is in the present continuous tense, indicating an ongoing action.",
  },
  {
    question: "We ______ a lot of fun at the party.",
    options: {
      a: "are having",
      b: "had",
      c: "have",
      d: "having",
    },
    answer: "a",
    explanation:
      "The present continuous tense is used to describe an action currently happening.",
  },
  {
    question: "I ______ a language class this semester.",
    options: {
      a: "am taking",
      b: "takes",
      c: "took",
      d: "take",
    },
    answer: "a",
    explanation:
      "This sentence is in the present continuous tense, indicating an ongoing activity.",
  },
  {
    question: "The dog ______ in the yard.",
    options: {
      a: "is playing",
      b: "plays",
      c: "play",
      d: "played",
    },
    answer: "a",
    explanation:
      "This sentence is in the present continuous tense, indicating an action happening right now.",
  },
  {
    question: "My friends ______ to the concert together.",
    options: {
      a: "are going",
      b: "go",
      c: "went",
      d: "going",
    },
    answer: "a",
    explanation:
      "The present continuous tense indicates an action currently in progress.",
  },
  {
    question: "She ______ for her driving test.",
    options: {
      a: "is practicing",
      b: "practices",
      c: "practiced",
      d: "practice",
    },
    answer: "a",
    explanation:
      "This sentence is in the present continuous tense, indicating an ongoing activity.",
  },
  {
    question: "The kids ______ with their toys.",
    options: {
      a: "are playing",
      b: "played",
      c: "play",
      d: "playing",
    },
    answer: "a",
    explanation:
      "This sentence is in the present continuous tense, indicating an action happening right now.",
  },
  {
    question: "I ______ my homework at the moment.",
    options: {
      a: "am finishing",
      b: "finished",
      c: "finish",
      d: "finishing",
    },
    answer: "a",
    explanation:
      "The present continuous tense describes an action currently taking place.",
  },
  {
    id: 41,
    question: "I ______ lived here for 5 years.",
    options: {
      a: "have",
      b: "had",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "The present perfect tense indicates an action that started in the past and continues to the present.",
  },
  {
    id: 42,
    question: "She ______ seen that movie before.",
    options: {
      a: "has",
      b: "have",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence uses present perfect tense to indicate an experience up to the present.",
  },
  {
    id: 43,
    question: "They ______ never visited Europe.",
    options: {
      a: "have",
      b: "has",
      c: "was",
      d: "are",
    },
    answer: "a",
    explanation:
      "The present perfect tense is used to show that an experience has not occurred until now.",
  },
  {
    id: 44,
    question: "He ______ just finished his homework.",
    options: {
      a: "has",
      b: "have",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence uses present perfect tense to indicate a recently completed action.",
  },
  {
    id: 45,
    question: "We ______ travelled to many countries.",
    options: {
      a: "have",
      b: "had",
      c: "was",
      d: "are",
    },
    answer: "a",
    explanation:
      "The present perfect tense shows that an action has occurred at some point in the past with relevance to the present.",
  },
  {
    id: 46,
    question: "She ______ already eaten dinner.",
    options: {
      a: "has",
      b: "have",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence uses present perfect tense to indicate that an action has been completed.",
  },
  {
    id: 47,
    question: "They ______ visited the Grand Canyon.",
    options: {
      a: "have",
      b: "has",
      c: "was",
      d: "are",
    },
    answer: "a",
    explanation:
      "The present perfect tense indicates that an experience has occurred at some point up to now.",
  },
  {
    id: 48,
    question: "I ______ never tried sushi.",
    options: {
      a: "have",
      b: "has",
      c: "was",
      d: "are",
    },
    answer: "a",
    explanation:
      "This sentence uses present perfect tense to show that an experience has not occurred until now.",
  },
  {
    id: 49,
    question: "She ______ been to Paris three times.",
    options: {
      a: "has",
      b: "have",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "The present perfect tense indicates an experience that has happened up to the present.",
  },
  {
    id: 50,
    question: "He ______ worked at the same company since 2010.",
    options: {
      a: "has",
      b: "have",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence uses present perfect tense to indicate an ongoing action from the past to the present.",
  },
  {
    id: 51,
    question: "We ______ studied English for years.",
    options: {
      a: "have",
      b: "has",
      c: "was",
      d: "are",
    },
    answer: "a",
    explanation:
      "The present perfect tense indicates an action that started in the past and continues to the present.",
  },
  {
    id: 52,
    question: "I ______ visited that museum before.",
    options: {
      a: "have",
      b: "has",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence uses present perfect tense to indicate an experience up to the present.",
  },
  {
    id: 53,
    question: "They ______ just arrived at the airport.",
    options: {
      a: "have",
      b: "has",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "The present perfect tense indicates a recently completed action.",
  },
  {
    id: 54,
    question: "She ______ not decided yet.",
    options: {
      a: "has",
      b: "have",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence uses present perfect tense in the negative form to show that a decision has not been made.",
  },
  {
    id: 55,
    question: "______ you ______ finished your project?",
    options: {
      a: "Have",
      b: "Has",
      c: "Was",
      d: "Is",
    },
    answer: "a",
    explanation:
      "This sentence is in the present perfect tense, asking about the completion of an action.",
  },
  {
    id: 56,
    question: "I ______ seen her this week.",
    options: {
      a: "have",
      b: "has",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "The present perfect tense indicates that an action has occurred at some point in the past with relevance to the present.",
  },
  {
    id: 57,
    question: "She ______ not finished her homework.",
    options: {
      a: "has",
      b: "have",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence uses present perfect tense in the negative form to indicate an unfinished action.",
  },
  {
    id: 58,
    question: "They ______ completed the assignment on time.",
    options: {
      a: "have",
      b: "has",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "The present perfect tense indicates a completed action with relevance to the present.",
  },
  {
    id: 59,
    question: "He ______ saved enough money for a new car.",
    options: {
      a: "has",
      b: "have",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence uses present perfect tense to indicate an ongoing action from the past to the present.",
  },
  {
    id: 60,
    question: "We ______ not seen each other in a long time.",
    options: {
      a: "have",
      b: "has",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence uses present perfect tense in the negative form to indicate an absence of interaction over time.",
  },
  {
    id: 1,
    question: "I ______ been studying all day.",
    options: {
      a: "have",
      b: "has",
      c: "am",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence uses present perfect continuous to indicate an action that started in the past and is still ongoing.",
  },
  {
    id: 2,
    question: "She ______ been working at the company for years.",
    options: {
      a: "has",
      b: "have",
      c: "is",
      d: "am",
    },
    answer: "a",
    explanation:
      "The present perfect continuous tense shows that her work at the company began in the past and continues to the present.",
  },
  {
    id: 3,
    question: "They ______ been playing games since morning.",
    options: {
      a: "have",
      b: "has",
      c: "are",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence indicates that their gaming started in the morning and is still happening.",
  },
  {
    id: 4,
    question: "He ______ been practicing the guitar for hours.",
    options: {
      a: "has",
      b: "have",
      c: "is",
      d: "was",
    },
    answer: "a",
    explanation:
      "The present perfect continuous shows that his practice has been ongoing for a long duration.",
  },
  {
    id: 5,
    question: "We ______ been renovating the house this week.",
    options: {
      a: "have",
      b: "has",
      c: "were",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence indicates that the house renovation started earlier in the week and continues.",
  },
  {
    id: 6,
    question: "She ______ been running in the park for half an hour.",
    options: {
      a: "has",
      b: "have",
      c: "is",
      d: "was",
    },
    answer: "a",
    explanation:
      "The present perfect continuous indicates that her running started half an hour ago and is ongoing.",
  },
  {
    id: 7,
    question: "They ______ been building a sand castle at the beach.",
    options: {
      a: "have",
      b: "has",
      c: "were",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence indicates their activity of building started in the past and continues to the present.",
  },
  {
    id: 8,
    question: "I ______ been cooking since I got home.",
    options: {
      a: "have",
      b: "has",
      c: "am",
      d: "is",
    },
    answer: "a",
    explanation:
      "The present perfect continuous shows that the cooking started after arriving home and is ongoing.",
  },
  {
    id: 9,
    question: "He ______ been watching TV all afternoon.",
    options: {
      a: "has",
      b: "have",
      c: "is",
      d: "was",
    },
    answer: "a",
    explanation:
      "This sentence indicates that he started watching TV earlier in the afternoon and continues to do so.",
  },
  {
    id: 10,
    question: "We ______ been waiting for the bus for 20 minutes.",
    options: {
      a: "have",
      b: "has",
      c: "were",
      d: "is",
    },
    answer: "a",
    explanation:
      "The present perfect continuous tense indicates that the waiting started 20 minutes ago and is still ongoing.",
  },
  {
    id: 11,
    question: "She ______ been gardening in the garden.",
    options: {
      a: "has",
      b: "have",
      c: "is",
      d: "was",
    },
    answer: "a",
    explanation:
      "The present perfect continuous indicates that her gardening started in the past and is still happening.",
  },
  {
    id: 12,
    question: "They ______ been learning a new language for a while.",
    options: {
      a: "have",
      b: "has",
      c: "were",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence shows that their learning process began in the past and continues.",
  },
  {
    id: 13,
    question: "I ______ been playing the piano for years.",
    options: {
      a: "have",
      b: "has",
      c: "am",
      d: "is",
    },
    answer: "a",
    explanation:
      "The present perfect continuous indicates that my piano playing started years ago and is ongoing.",
  },
  {
    id: 14,
    question: "She ______ been working out at the gym lately.",
    options: {
      a: "has",
      b: "have",
      c: "is",
      d: "was",
    },
    answer: "a",
    explanation:
      "This sentence indicates that her workouts at the gym began recently and continue.",
  },
  {
    id: 15,
    question: "He ______ been fishing by the river all morning.",
    options: {
      a: "has",
      b: "have",
      c: "is",
      d: "was",
    },
    answer: "a",
    explanation:
      "The present perfect continuous tense indicates that his fishing started in the morning and is ongoing.",
  },
  {
    id: 16,
    question: "We ______ been discussing the project for hours.",
    options: {
      a: "have",
      b: "has",
      c: "were",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence shows that our discussion of the project started hours ago and continues.",
  },
  {
    id: 17,
    question: "They ______ been studying for the final exams.",
    options: {
      a: "have",
      b: "has",
      c: "were",
      d: "is",
    },
    answer: "a",
    explanation:
      "The present perfect continuous indicates that their studying began in the past and is ongoing.",
  },
  {
    id: 18,
    question: "I ______ been knitting a sweater for my niece.",
    options: {
      a: "have",
      b: "has",
      c: "am",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence indicates that my knitting started in the past and continues.",
  },
  {
    id: 19,
    question: "She ______ been cleaning the entire house.",
    options: {
      a: "has",
      b: "have",
      c: "is",
      d: "was",
    },
    answer: "a",
    explanation:
      "The present perfect continuous tense indicates that her cleaning started earlier and is ongoing.",
  },
  {
    id: 20,
    question: "They ______ been hiking in the mountains for days.",
    options: {
      a: "have",
      b: "has",
      c: "were",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence indicates that their hiking began days ago and continues.",
  },
  {
    id: 1,
    question: "I ______ Paris last summer.",
    options: {
      a: "visit",
      b: "visited",
      c: "visiting",
      d: "was visiting",
    },
    answer: "b",
    explanation:
      "This sentence is in the simple past tense, indicating a completed action that occurred at a specific time in the past.",
  },
  {
    id: 2,
    question: "She ______ dinner yesterday.",
    options: {
      a: "cook",
      b: "cooked",
      c: "cooking",
      d: "was cooking",
    },
    answer: "b",
    explanation:
      "The sentence uses simple past tense to describe an action that has already happened.",
  },
  {
    id: 3,
    question: "They ______ football after school.",
    options: {
      a: "play",
      b: "played",
      c: "playing",
      d: "was playing",
    },
    answer: "b",
    explanation:
      "This sentence is in the simple past tense, indicating an action completed in the past.",
  },
  {
    id: 4,
    question: "He ______ from college in 2020.",
    options: {
      a: "graduate",
      b: "graduated",
      c: "graduating",
      d: "was graduating",
    },
    answer: "b",
    explanation:
      "The sentence uses simple past tense to indicate a completed action at a specific time.",
  },
  {
    id: 5,
    question: "We ______ to Italy last year.",
    options: {
      a: "travel",
      b: "travelling",
      c: "travelled",
      d: "was travelling",
    },
    answer: "c",
    explanation:
      "This sentence is in the simple past tense, indicating a completed journey.",
  },
  {
    id: 6,
    question: "She ______ a great book last night.",
    options: {
      a: "read",
      b: "reads",
      c: "reading",
      d: "was reading",
    },
    answer: "a",
    explanation:
      "The sentence uses simple past tense to describe an action that happened in the past.",
  },
  {
    id: 7,
    question: "They ______ to the beach on Saturday.",
    options: {
      a: "go",
      b: "went",
      c: "going",
      d: "were going",
    },
    answer: "b",
    explanation:
      "This sentence is in the simple past tense, indicating a completed action.",
  },
  {
    id: 8,
    question: "I ______ that movie 2 days ago.",
    options: {
      a: "see",
      b: "saw",
      c: "seeing",
      d: "was seeing",
    },
    answer: "b",
    explanation:
      "This sentence is in the simple past tense, indicating a completed action at a specific time.",
  },
  {
    id: 9,
    question: "She ______ in London as a child.",
    options: {
      a: "live",
      b: "lived",
      c: "living",
      d: "was living",
    },
    answer: "b",
    explanation:
      "The sentence uses simple past tense to describe a past situation.",
  },
  {
    id: 10,
    question: "We ______ at a conference last month.",
    options: {
      a: "meet",
      b: "met",
      c: "meeting",
      d: "were meeting",
    },
    answer: "b",
    explanation:
      "This sentence is in the simple past tense, indicating a completed action.",
  },
  {
    id: 11,
    question: "She ______ at that company before.",
    options: {
      a: "work",
      b: "worked",
      c: "working",
      d: "was working",
    },
    answer: "b",
    explanation:
      "The sentence uses simple past tense to indicate a prior employment.",
  },
  {
    id: 12,
    question: "I ______ lunch an hour ago.",
    options: {
      a: "eat",
      b: "ate",
      c: "eating",
      d: "was eating",
    },
    answer: "b",
    explanation:
      "This sentence is in the simple past tense, indicating a completed action at a specific time.",
  },
  {
    id: 13,
    question: "They ______ the museum on Sunday.",
    options: {
      a: "visit",
      b: "visited",
      c: "visiting",
      d: "were visiting",
    },
    answer: "b",
    explanation:
      "The sentence uses simple past tense to describe an action that has already happened.",
  },
  {
    id: 14,
    question: "He ______ his homework yesterday.",
    options: {
      a: "finish",
      b: "finished",
      c: "finishing",
      d: "was finishing",
    },
    answer: "b",
    explanation:
      "This sentence is in the simple past tense, indicating a completed action.",
  },
  {
    id: 15,
    question: "She ______ the house last week.",
    options: {
      a: "clean",
      b: "cleaned",
      c: "cleaning",
      d: "was cleaning",
    },
    answer: "b",
    explanation:
      "The sentence uses simple past tense to indicate a completed action.",
  },
  {
    id: 16,
    question: "We ______ all night at the party.",
    options: {
      a: "dance",
      b: "danced",
      c: "dancing",
      d: "were dancing",
    },
    answer: "b",
    explanation:
      "This sentence is in the simple past tense, indicating a completed action.",
  },
  {
    id: 17,
    question: "I ______ watch TV yesterday.",
    options: {
      a: "didn't",
      b: "don't",
      c: "wasn't",
      d: "did",
    },
    answer: "a",
    explanation:
      "The negative form is used in the simple past tense to indicate that the action did not happen.",
  },
  {
    id: 18,
    question: "Did they ______ to the concert?",
    options: {
      a: "go",
      b: "went",
      c: "going",
      d: "were going",
    },
    answer: "a",
    explanation:
      "This sentence is in the simple past tense, asking about a completed action.",
  },
  {
    id: 19,
    question: "She ______ call me back.",
    options: {
      a: "didn't",
      b: "doesn't",
      c: "wasn't",
      d: "did",
    },
    answer: "a",
    explanation:
      "The negative form is used in the simple past tense to indicate that the action did not happen.",
  },
  {
    id: 20,
    question: "Did you ______ the accident?",
    options: {
      a: "see",
      b: "saw",
      c: "seeing",
      d: "were seeing",
    },
    answer: "a",
    explanation:
      "This sentence is in the simple past tense, asking about a completed action.",
  },
  {
    id: 21,
    question: "I ______ when he called.",
    options: {
      a: "studied",
      b: "was studying",
      c: "studying",
      d: "study",
    },
    answer: "b",
    explanation:
      "This sentence is in the past continuous tense, indicating an action that was ongoing when another action occurred.",
  },
  {
    id: 22,
    question: "She ______ a book all evening.",
    options: {
      a: "read",
      b: "was reading",
      c: "reads",
      d: "reading",
    },
    answer: "b",
    explanation:
      "The sentence uses past continuous tense to describe an action in progress over a period of time.",
  },
  {
    id: 23,
    question: "They ______ on the project yesterday.",
    options: {
      a: "were working",
      b: "worked",
      c: "was working",
      d: "working",
    },
    answer: "a",
    explanation:
      "This sentence is in the past continuous tense, indicating an action that was ongoing.",
  },
  {
    id: 24,
    question: "He ______ to work at 8:00 a.m.",
    options: {
      a: "drive",
      b: "drove",
      c: "was driving",
      d: "driving",
    },
    answer: "c",
    explanation:
      "This sentence is in the past continuous tense, describing an action in progress at a specific time.",
  },
  {
    id: 25,
    question: "We ______ a movie last night.",
    options: {
      a: "watch",
      b: "were watching",
      c: "watched",
      d: "watching",
    },
    answer: "b",
    explanation:
      "This sentence uses past continuous tense to describe an ongoing action in the past.",
  },
  {
    id: 26,
    question: "She ______ dinner when the power went out.",
    options: {
      a: "cooked",
      b: "was cooking",
      c: "cooking",
      d: "cook",
    },
    answer: "b",
    explanation:
      "The past continuous tense is used to describe an action in progress when another action interrupted it.",
  },
  {
    id: 27,
    question: "They ______ in the garden when it started raining.",
    options: {
      a: "were playing",
      b: "played",
      c: "was playing",
      d: "playing",
    },
    answer: "a",
    explanation:
      "This sentence is in the past continuous tense, indicating an ongoing action that was interrupted.",
  },
  {
    id: 28,
    question: "I ______ to music on my headphones.",
    options: {
      a: "was listening",
      b: "listened",
      c: "listen",
      d: "listening",
    },
    answer: "a",
    explanation:
      "The past continuous tense describes an action that was ongoing.",
  },
  {
    id: 29,
    question: "He ______ not paying attention during the class.",
    options: {
      a: "was",
      b: "is",
      c: "wasn't",
      d: "didn't",
    },
    answer: "c",
    explanation:
      "This sentence uses the negative form of the past continuous tense.",
  },
  {
    id: 30,
    question: "______ you ______ the piano at that time?",
    options: {
      a: "Were",
      b: "Was",
      c: "Did",
      d: "Are",
    },
    answer: "a",
    explanation:
      "This sentence is in the past continuous tense, asking about an ongoing action.",
  },
  {
    id: 31,
    question: "She ______ to her friend on the phone.",
    options: {
      a: "was talking",
      b: "talk",
      c: "talked",
      d: "is talking",
    },
    answer: "a",
    explanation:
      "This sentence is in the past continuous tense, indicating an ongoing action.",
  },
  {
    id: 32,
    question: "They ______ in the park when it got dark.",
    options: {
      a: "were running",
      b: "ran",
      c: "was running",
      d: "running",
    },
    answer: "a",
    explanation:
      "The past continuous tense describes an ongoing action that was interrupted.",
  },
  {
    id: 33,
    question: "I ______ not wearing my coat so I got cold.",
    options: {
      a: "was",
      b: "were",
      c: "wasn't",
      d: "didn't",
    },
    answer: "c",
    explanation:
      "This sentence uses the negative form of the past continuous tense.",
  },
  {
    id: 34,
    question: "She ______ coming to the party last Saturday.",
    options: {
      a: "wasn't",
      b: "was",
      c: "isn't",
      d: "didn't",
    },
    answer: "a",
    explanation:
      "The negative form indicates she did not attend, using past continuous tense.",
  },
  {
    id: 35,
    question: "______ you ______ on your assignment all day?",
    options: {
      a: "Were,working",
      b: "Was,worked",
      c: "Did,working",
      d: "Are,work",
    },
    answer: "a",
    explanation:
      "This sentence is in the past continuous tense, asking about an ongoing action.",
  },
  {
    id: 36,
    question: "He ______ not sleeping well due to the noise.",
    options: {
      a: "was",
      b: "is",
      c: "wasn't",
      d: "didn't",
    },
    answer: "c",
    explanation:
      "The negative form indicates a lack of sleep, using past continuous tense.",
  },
  {
    id: 37,
    question: "What ______ you ______ when the earthquake occurred?",
    options: {
      a: "were,doing",
      b: "was,doing",
      c: "did,doing",
      d: "are,do",
    },
    answer: "a",
    explanation:
      "This sentence is in the past continuous tense, asking about an ongoing action.",
  },
  {
    id: 38,
    question: "They ______ not playing video games in the evening.",
    options: {
      a: "were",
      b: "are",
      c: "wasn't",
      d: "didn't",
    },
    answer: "c",
    explanation:
      "The negative form indicates they did not engage in that activity, using past continuous tense.",
  },
  {
    id: 39,
    question: "______ she writing a letter to her pen pal?",
    options: {
      a: "Was",
      b: "Were",
      c: "Did",
      d: "Are",
    },
    answer: "a",
    explanation:
      "This sentence is in the past continuous tense, asking about an ongoing action.",
  },
  {
    id: 40,
    question: "I ______ not feeling well during the trip.",
    options: {
      a: "was",
      b: "were",
      c: "am",
      d: "is",
    },
    answer: "a",
    explanation:
      "The negative form indicates a past state of being, using past continuous tense.",
  },
  {
    id: 1,
    question: "I ______ finished my homework when he called.",
    options: {
      a: "had",
      b: "has",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence uses the past perfect tense to indicate an action completed before another action in the past.",
  },
  {
    id: 2,
    question: "She ______ already left when I called her.",
    options: {
      a: "had",
      b: "has",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "The past perfect tense shows that her leaving occurred before my call.",
  },
  {
    id: 3,
    question: "They ______ eaten dinner before the movie started.",
    options: {
      a: "had",
      b: "has",
      c: "were",
      d: "are",
    },
    answer: "a",
    explanation:
      "This sentence uses past perfect to indicate the completion of dinner prior to the movie.",
  },
  {
    id: 4,
    question: "He ______ completed the project by the time I arrived.",
    options: {
      a: "had",
      b: "has",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "The past perfect tense indicates that the project was finished before my arrival.",
  },
  {
    id: 5,
    question: "We ______ already left the restaurant when the storm began.",
    options: {
      a: "had",
      b: "has",
      c: "were",
      d: "are",
    },
    answer: "a",
    explanation:
      "This sentence shows that we left the restaurant before the storm started.",
  },
  {
    id: 6,
    question: "She ______ read the book before the movie came out.",
    options: {
      a: "had",
      b: "has",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "The past perfect indicates she finished reading the book before the movie's release.",
  },
  {
    id: 7,
    question:
      "They ______ already left for the airport when we arrived at their house.",
    options: {
      a: "had",
      b: "has",
      c: "were",
      d: "are",
    },
    answer: "a",
    explanation:
      "This sentence shows they departed for the airport before we got to their house.",
  },
  {
    id: 8,
    question: "I ______ studied French before travelling to Paris.",
    options: {
      a: "had",
      b: "has",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "The past perfect tense indicates I learned French before my trip.",
  },
  {
    id: 9,
    question: "He ______ finished the race before it started raining.",
    options: {
      a: "had",
      b: "has",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence uses past perfect to indicate he completed the race prior to the rain.",
  },
  {
    id: 10,
    question:
      "We ______ already booked the tickets before the event was cancelled.",
    options: {
      a: "had",
      b: "has",
      c: "were",
      d: "are",
    },
    answer: "a",
    explanation:
      "The past perfect tense indicates that ticket booking occurred before the cancellation.",
  },
  {
    id: 11,
    question: "She ______ written the report before the meeting.",
    options: {
      a: "had",
      b: "has",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence shows that she completed the report before the meeting.",
  },
  {
    id: 12,
    question: "They ______ cooked dinner before the guests arrived.",
    options: {
      a: "had",
      b: "has",
      c: "were",
      d: "are",
    },
    answer: "a",
    explanation:
      "The past perfect indicates that dinner was prepared before the guests' arrival.",
  },
  {
    id: 13,
    question: "I ______ already prepared breakfast before you woke up.",
    options: {
      a: "had",
      b: "has",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence uses past perfect to show that breakfast was ready before your waking.",
  },
  {
    id: 14,
    question: "She ______ solved the puzzle before I could even try.",
    options: {
      a: "had",
      b: "has",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "The past perfect tense indicates she completed the puzzle before I attempted.",
  },
  {
    id: 15,
    question: "They ______ visited the museum before it closed.",
    options: {
      a: "had",
      b: "has",
      c: "were",
      d: "are",
    },
    answer: "a",
    explanation:
      "This sentence shows that their visit to the museum occurred before its closure.",
  },
  {
    id: 16,
    question: "He ______ fixed the car before we needed to use it.",
    options: {
      a: "had",
      b: "has",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "The past perfect tense indicates he repaired the car before its necessity.",
  },
  {
    id: 17,
    question: "We ______ cleaned the house before the party.",
    options: {
      a: "had",
      b: "has",
      c: "were",
      d: "are",
    },
    answer: "a",
    explanation:
      "This sentence uses past perfect to show cleaning was done prior to the party.",
  },
  {
    id: 18,
    question: "She ______ returned the library books before they were overdue.",
    options: {
      a: "had",
      b: "has",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "The past perfect tense indicates she returned the books before their due date.",
  },
  {
    id: 19,
    question: "They ______ taken the dog for a walk before it started raining.",
    options: {
      a: "had",
      b: "has",
      c: "were",
      d: "are",
    },
    answer: "a",
    explanation:
      "This sentence shows that the dog was walked before the rain began.",
  },
  {
    id: 20,
    question: "I ______ submitted my application before the deadline.",
    options: {
      a: "had",
      b: "has",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "The past perfect tense indicates that my application was submitted prior to the deadline.",
  },
  {
    id: 1,
    question: "I ______ been studying for hours when he called.",
    options: {
      a: "had",
      b: "have",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "The past perfect continuous indicates that the studying started before the call.",
  },
  {
    id: 2,
    question: "She ______ been playing the piano all evening.",
    options: {
      a: "had",
      b: "have",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence shows that her piano playing started before the evening ended.",
  },
  {
    id: 3,
    question: "They ______ been working on the project all day yesterday.",
    options: {
      a: "had",
      b: "have",
      c: "were",
      d: "is",
    },
    answer: "a",
    explanation:
      "The past perfect continuous indicates that their work on the project started earlier in the day.",
  },
  {
    id: 4,
    question: "He ______ been fishing by the lake for most of the morning.",
    options: {
      a: "had",
      b: "have",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence indicates that his fishing began before the morning was over.",
  },
  {
    id: 5,
    question:
      "We ______ been waiting at the airport for hours before the flight was cancelled.",
    options: {
      a: "had",
      b: "have",
      c: "were",
      d: "is",
    },
    answer: "a",
    explanation:
      "The past perfect continuous indicates that the waiting started before the flight cancellation.",
  },
  {
    id: 6,
    question:
      "She ______ been practicing the guitar for weeks before the concert.",
    options: {
      a: "had",
      b: "have",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "This shows that her guitar practice began prior to the concert.",
  },
  {
    id: 7,
    question:
      "They ______ been discussing the issue for a long time before reaching a decision.",
    options: {
      a: "had",
      b: "have",
      c: "were",
      d: "is",
    },
    answer: "a",
    explanation:
      "The past perfect continuous shows that their discussion started before the decision was made.",
  },
  {
    id: 8,
    question:
      "I ______ been living in the city for 3 years before I moved to the countryside.",
    options: {
      a: "had",
      b: "have",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence indicates that my time in the city began before the move.",
  },
  {
    id: 9,
    question:
      "She ______ been dancing at the club all night before she got tired.",
    options: {
      a: "had",
      b: "have",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "The past perfect continuous indicates that her dancing started before she felt tired.",
  },
  {
    id: 10,
    question: "They ______ been travelling across Europe for months.",
    options: {
      a: "had",
      b: "have",
      c: "were",
      d: "is",
    },
    answer: "a",
    explanation: "This shows that their travels began before the months ended.",
  },
  {
    id: 11,
    question:
      "I ______ been attending the same school for years before we moved.",
    options: {
      a: "had",
      b: "have",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "The past perfect continuous shows that my school attendance started before the move.",
  },
  {
    id: 12,
    question:
      "She ______ been working on the novel for several months before finishing it.",
    options: {
      a: "had",
      b: "have",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "This indicates that her work on the novel started before she completed it.",
  },
  {
    id: 13,
    question:
      "He ______ been studying medicine for a decade before becoming a doctor.",
    options: {
      a: "had",
      b: "have",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "The past perfect continuous shows that his studies began long before he became a doctor.",
  },
  {
    id: 14,
    question:
      "We ______ been renovating the old house for weeks before it was ready to move in.",
    options: {
      a: "had",
      b: "have",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "This indicates that the renovation process began before the house was ready.",
  },
  {
    id: 15,
    question:
      "They ______ been skiing in the mountains for a few hours when the storm hit.",
    options: {
      a: "had",
      b: "have",
      c: "were",
      d: "is",
    },
    answer: "a",
    explanation:
      "The past perfect continuous shows that their skiing started before the storm hit.",
  },
  {
    id: 16,
    question:
      "I ______ been volunteering at the shelter for a year before I got a paid job there.",
    options: {
      a: "had",
      b: "have",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "This indicates that my volunteering began before I received a job.",
  },
  {
    id: 17,
    question:
      "She ______ been practicing yoga for years before becoming an instructor.",
    options: {
      a: "had",
      b: "have",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "The past perfect continuous shows that her yoga practice started before she became an instructor.",
  },
  {
    id: 18,
    question:
      "They ______ been painting the living room for the entire weekend.",
    options: {
      a: "had",
      b: "have",
      c: "were",
      d: "is",
    },
    answer: "a",
    explanation:
      "This sentence indicates that their painting activity started before the weekend ended.",
  },
  {
    id: 19,
    question: "He ______ been growing vegetables in his garden for months.",
    options: {
      a: "had",
      b: "have",
      c: "was",
      d: "is",
    },
    answer: "a",
    explanation:
      "The past perfect continuous shows that his gardening started before the months ended.",
  },
  {
    id: 20,
    question:
      "We ______ been waiting for the bus for half an hour before it finally arrived.",
    options: {
      a: "had",
      b: "have",
      c: "were",
      d: "is",
    },
    answer: "a",
    explanation:
      "This indicates that our waiting began before the bus arrived.",
  },
  {
    id: 61,
    question: "I ______ go to the party tomorrow.",
    options: {
      a: "will",
      b: "was",
      c: "is",
      d: "have",
    },
    answer: "a",
    explanation:
      "The future simple tense indicates an action that will take place in the future.",
  },
  {
    id: 62,
    question: "She ______ call you later.",
    options: {
      a: "will",
      b: "was",
      c: "is",
      d: "has",
    },
    answer: "a",
    explanation:
      "This sentence uses future simple tense to indicate an action that will happen.",
  },
  {
    id: 63,
    question: "They ______ arrive at 6 p.m.",
    options: {
      a: "will",
      b: "was",
      c: "is",
      d: "have",
    },
    answer: "a",
    explanation:
      "The future simple tense shows that an action will take place at a specified time.",
  },
  {
    id: 64,
    question: "He ______ finish his homework tonight.",
    options: {
      a: "will",
      b: "was",
      c: "is",
      d: "has",
    },
    answer: "a",
    explanation:
      "This sentence is in the future simple tense, indicating an action that will happen.",
  },
  {
    id: 65,
    question: "We ______ see you next week.",
    options: {
      a: "will",
      b: "was",
      c: "is",
      d: "have",
    },
    answer: "a",
    explanation:
      "The future simple tense indicates an action that will occur in the future.",
  },
  {
    id: 66,
    question: "She ______ not attend the meeting tomorrow.",
    options: {
      a: "will",
      b: "was",
      c: "is",
      d: "has",
    },
    answer: "a",
    explanation:
      "This sentence uses future simple tense in the negative form to indicate an action that will not happen.",
  },
  {
    id: 67,
    question: "______ you ______ help me with this task?",
    options: {
      a: "Will",
      b: "Was",
      c: "Is",
      d: "Has",
    },
    answer: "a",
    explanation:
      "This sentence is in the future simple tense, asking about an action that will happen.",
  },
  {
    id: 68,
    question: "I ______ go shopping tomorrow.",
    options: {
      a: "will",
      b: "was",
      c: "is",
      d: "have",
    },
    answer: "a",
    explanation:
      "The future simple tense indicates an action that will take place in the future.",
  },
  {
    id: 69,
    question: "They ______ travel to France next month.",
    options: {
      a: "will",
      b: "was",
      c: "is",
      d: "have",
    },
    answer: "a",
    explanation:
      "This sentence uses future simple tense to indicate an action that will happen.",
  },
  {
    id: 70,
    question: "He ______ help you with that project.",
    options: {
      a: "will",
      b: "was",
      c: "is",
      d: "has",
    },
    answer: "a",
    explanation:
      "The future simple tense indicates an action that will happen in the future.",
  },
  {
    id: 71,
    question: "We ______ meet at the café later.",
    options: {
      a: "will",
      b: "was",
      c: "is",
      d: "have",
    },
    answer: "a",
    explanation:
      "This sentence is in the future simple tense, indicating an action that will happen.",
  },
  {
    id: 72,
    question: "She ______ not come to the party.",
    options: {
      a: "will",
      b: "was",
      c: "is",
      d: "has",
    },
    answer: "a",
    explanation:
      "This sentence uses future simple tense in the negative form to indicate an action that will not happen.",
  },
  {
    id: 73,
    question: "______ they ______ finish their work by tomorrow?",
    options: {
      a: "Will",
      b: "Was",
      c: "Is",
      d: "Has",
    },
    answer: "a",
    explanation:
      "This sentence is in the future simple tense, asking about the completion of an action.",
  },
  {
    id: 74,
    question: "I ______ start my new job next week.",
    options: {
      a: "will",
      b: "was",
      c: "is",
      d: "have",
    },
    answer: "a",
    explanation:
      "The future simple tense indicates an action that will take place in the future.",
  },
  {
    id: 75,
    question: "They ______ not attend the event next month.",
    options: {
      a: "will",
      b: "was",
      c: "is",
      d: "has",
    },
    answer: "a",
    explanation:
      "This sentence uses future simple tense in the negative form to indicate an action that will not happen.",
  },
  {
    id: 76,
    question: "She ______ help with the preparations.",
    options: {
      a: "will",
      b: "was",
      c: "is",
      d: "has",
    },
    answer: "a",
    explanation:
      "The future simple tense indicates an action that will happen in the future.",
  },
  {
    id: 77,
    question: "We ______ finish the project next week.",
    options: {
      a: "will",
      b: "was",
      c: "is",
      d: "have",
    },
    answer: "a",
    explanation:
      "This sentence is in the future simple tense, indicating an action that will happen.",
  },
  {
    id: 78,
    question: "______ you ______ join us for dinner tomorrow?",
    options: {
      a: "Will",
      b: "Was",
      c: "Is",
      d: "Has",
    },
    answer: "a",
    explanation:
      "This sentence is in the future simple tense, asking about an action that will happen.",
  },
  {
    id: 79,
    question: "He ______ not go to the meeting.",
    options: {
      a: "will",
      b: "was",
      c: "is",
      d: "has",
    },
    answer: "a",
    explanation:
      "This sentence uses future simple tense in the negative form to indicate an action that will not happen.",
  },
  {
    id: 80,
    question: "I ______ study for the exam tonight.",
    options: {
      a: "will",
      b: "was",
      c: "is",
      d: "have",
    },
    answer: "a",
    explanation:
      "The future simple tense indicates an action that will take place in the future.",
  },

  {
    id: 1,
    question: "I ______ be studying when you arrive.",
    options: {
      a: "will",
      b: "would",
      c: "am",
      d: "have",
    },
    answer: "a",
    explanation:
      "The future continuous tense indicates that studying will be ongoing at the time of arrival.",
  },
  {
    id: 2,
    question: "She ______ be working late tonight.",
    options: {
      a: "will",
      b: "would",
      c: "is",
      d: "has",
    },
    answer: "a",
    explanation:
      "This sentence shows that her working will be in progress during tonight.",
  },
  {
    id: 3,
    question: "They ______ be playing football at the park.",
    options: {
      a: "will",
      b: "would",
      c: "are",
      d: "have",
    },
    answer: "a",
    explanation:
      "The future continuous indicates that their football playing will happen in the future.",
  },
  {
    id: 4,
    question: "He ______ be driving to work at that time.",
    options: {
      a: "will",
      b: "would",
      c: "is",
      d: "has",
    },
    answer: "a",
    explanation:
      "This shows that his driving will be ongoing at the specified future time.",
  },
  {
    id: 5,
    question: "We ______ be having dinner when you call.",
    options: {
      a: "will",
      b: "would",
      c: "are",
      d: "have",
    },
    answer: "a",
    explanation:
      "The future continuous indicates that having dinner will be happening during the call.",
  },
  {
    id: 6,
    question: "She ______ be attending a conference next week.",
    options: {
      a: "will",
      b: "would",
      c: "is",
      d: "has",
    },
    answer: "a",
    explanation:
      "This shows that her attendance at the conference will be in progress next week.",
  },
  {
    id: 7,
    question: "They ______ be traveling to Italy during the summer.",
    options: {
      a: "will",
      b: "would",
      c: "are",
      d: "have",
    },
    answer: "a",
    explanation:
      "The future continuous indicates that their traveling will be ongoing in the summer.",
  },
  {
    id: 8,
    question: "I ______ be waiting for you at the café.",
    options: {
      a: "will",
      b: "would",
      c: "am",
      d: "have",
    },
    answer: "a",
    explanation: "This shows that my waiting will happen at the café.",
  },
  {
    id: 9,
    question: "He ______ be watching the game on TV.",
    options: {
      a: "will",
      b: "would",
      c: "is",
      d: "has",
    },
    answer: "a",
    explanation:
      "The future continuous indicates that his watching will be ongoing while the game is on.",
  },
  {
    id: 10,
    question: "We ______ be relaxing at the beach next month.",
    options: {
      a: "will",
      b: "would",
      c: "are",
      d: "have",
    },
    answer: "a",
    explanation: "This shows that our relaxing will be happening at the beach.",
  },
  {
    id: 11,
    question: "She ______ not be working on the project tomorrow.",
    options: {
      a: "will",
      b: "would",
      c: "is",
      d: "has",
    },
    answer: "a",
    explanation:
      "This indicates that she will not be engaged in working on the project tomorrow.",
  },
  {
    id: 12,
    question: "They ______ not be attending the meeting next week.",
    options: {
      a: "will",
      b: "would",
      c: "are",
      d: "have",
    },
    answer: "a",
    explanation:
      "This shows that their attendance at the meeting will not be happening.",
  },
  {
    id: 13,
    question: "Will you ______ coming to the party later?",
    options: {
      a: "be",
      b: "was",
      c: "is",
      d: "are",
    },
    answer: "a",
    explanation:
      "This is a question about whether your attendance at the party will happen later.",
  },
  {
    id: 14,
    question: "What ______ you be doing at this time tomorrow?",
    options: {
      a: "will",
      b: "would",
      c: "are",
      d: "have",
    },
    answer: "a",
    explanation:
      "This asks about your activity that will be ongoing at a specific future time.",
  },
  {
    id: 15,
    question: "They ______ not be playing video games this weekend.",
    options: {
      a: "will",
      b: "would",
      c: "are",
      d: "have",
    },
    answer: "a",
    explanation:
      "This indicates that they will not be engaged in playing video games this weekend.",
  },
  {
    id: 16,
    question: "He ______ be reading a book in the evening.",
    options: {
      a: "will",
      b: "would",
      c: "is",
      d: "has",
    },
    answer: "a",
    explanation:
      "The future continuous indicates that his reading will be happening in the evening.",
  },
  {
    id: 17,
    question: "We ______ be visiting friends next Saturday.",
    options: {
      a: "will",
      b: "would",
      c: "are",
      d: "have",
    },
    answer: "a",
    explanation:
      "This shows that our visit to friends will be happening next Saturday.",
  },
  {
    id: 18,
    question: "I ______ be exercising at the gym tomorrow morning.",
    options: {
      a: "will",
      b: "would",
      c: "am",
      d: "have",
    },
    answer: "a",
    explanation:
      "The future continuous indicates that my exercising will be happening tomorrow morning.",
  },
  {
    id: 19,
    question: "Will she ______ studying for her exams tonight?",
    options: {
      a: "be",
      b: "was",
      c: "is",
      d: "are",
    },
    answer: "a",
    explanation: "This asks about her studying that will be ongoing tonight.",
  },
  {
    id: 20,
    question: "They ______ be eating out for dinner.",
    options: {
      a: "will",
      b: "would",
      c: "are",
      d: "have",
    },
    answer: "a",
    explanation: "This shows that their dinner plans will involve eating out.",
  },

  {
    id: 1,
    question: "I ______ completed my assignment by Friday.",
    options: {
      a: "will have",
      b: "am",
      c: "was",
      d: "have been",
    },
    answer: "a",
    explanation:
      "The future perfect tense indicates that the assignment will be completed before Friday.",
  },
  {
    id: 2,
    question: "She ______ finished her project by next week.",
    options: {
      a: "will have",
      b: "is",
      c: "was",
      d: "has been",
    },
    answer: "a",
    explanation: "This shows she will finish the project before next week.",
  },
  {
    id: 3,
    question: "They ______ arrived by noon.",
    options: {
      a: "will have",
      b: "are",
      c: "were",
      d: "have been",
    },
    answer: "a",
    explanation: "Indicates their arrival will occur by noon.",
  },
  {
    id: 4,
    question: "He ______ graduated by the end of the year.",
    options: {
      a: "will have",
      b: "is",
      c: "was",
      d: "has been",
    },
    answer: "a",
    explanation: "Indicates he will complete his graduation by then.",
  },
  {
    id: 5,
    question: "We ______ traveled to five countries by the end of the trip.",
    options: {
      a: "will have",
      b: "are",
      c: "were",
      d: "have been",
    },
    answer: "a",
    explanation: "Shows completion of travel plans.",
  },
  {
    id: 6,
    question: "She ______ read that book before the exam.",
    options: {
      a: "will have",
      b: "is",
      c: "was",
      d: "has been",
    },
    answer: "a",
    explanation: "Indicates she will finish reading before the exam.",
  },
  {
    id: 7,
    question: "They ______ eaten dinner by the time we arrive.",
    options: {
      a: "will have",
      b: "are",
      c: "were",
      d: "have been",
    },
    answer: "a",
    explanation: "Indicates that dinner will be completed upon arrival.",
  },
  {
    id: 8,
    question: "I ______ saved enough money for a new car.",
    options: {
      a: "will have",
      b: "am",
      c: "was",
      d: "have been",
    },
    answer: "a",
    explanation: "Indicates that savings will be complete by that time.",
  },
  {
    id: 9,
    question: "He ______ worked at the company for ten years next month.",
    options: {
      a: "will have",
      b: "is",
      c: "was",
      d: "has been",
    },
    answer: "a",
    explanation: "Shows his time at the company will reach ten years.",
  },
  {
    id: 10,
    question: "We ______ painted the house by the time the guests arrive.",
    options: {
      a: "will have",
      b: "are",
      c: "were",
      d: "have been",
    },
    answer: "a",
    explanation: "Indicates completion of painting before guests arrive.",
  },
  {
    id: 11,
    question: "She ______ not have finished her report by then.",
    options: {
      a: "will",
      b: "is",
      c: "was",
      d: "has been",
    },
    answer: "a",
    explanation: "Indicates she will not complete her report.",
  },
  {
    id: 12,
    question: "They ______ not have completed the project on time.",
    options: {
      a: "will",
      b: "are",
      c: "were",
      d: "have been",
    },
    answer: "a",
    explanation: "Shows the project won't be finished by the deadline.",
  },
  {
    id: 13,
    question: "______ you have returned by 8 p.m.?",
    options: {
      a: "Will",
      b: "Are",
      c: "Were",
      d: "Have",
    },
    answer: "a",
    explanation: "Asks if you will return by that time.",
  },
  {
    id: 14,
    question: "What ______ you have accomplished by the end of the year?",
    options: {
      a: "will",
      b: "are",
      c: "were",
      d: "have been",
    },
    answer: "a",
    explanation: "Inquires about future achievements.",
  },
  {
    id: 15,
    question: "He ______ not have solved the problem yet.",
    options: {
      a: "will",
      b: "is",
      c: "was",
      d: "has been",
    },
    answer: "a",
    explanation: "Indicates that the problem remains unresolved.",
  },
  {
    id: 16,
    question: "We ______ learned a lot by the end of the course.",
    options: {
      a: "will have",
      b: "are",
      c: "were",
      d: "have been",
    },
    answer: "a",
    explanation: "Indicates knowledge gained by the end of the course.",
  },
  {
    id: 17,
    question: "I ______ cooked dinner by the time you get home.",
    options: {
      a: "will have",
      b: "am",
      c: "was",
      d: "have been",
    },
    answer: "a",
    explanation: "Shows that dinner will be prepared before your arrival.",
  },
  {
    id: 18,
    question: "______ she have graduated before her birthday?",
    options: {
      a: "Will",
      b: "Is",
      c: "Was",
      d: "Has",
    },
    answer: "a",
    explanation: "Inquires about her graduation timing.",
  },
  {
    id: 19,
    question: "They ______ moved to a new house by next month.",
    options: {
      a: "will have",
      b: "are",
      c: "were",
      d: "have been",
    },
    answer: "a",
    explanation: "Indicates completion of moving plans.",
  },
  {
    id: 20,
    question: "I ______ read that book by next week.",
    options: {
      a: "will have",
      b: "am",
      c: "was",
      d: "have been",
    },
    answer: "a",
    explanation: "Shows completion of reading plans.",
  },

  {
    id: 1,
    question: "I ______ been studying for three hours by noon.",
    options: {
      a: "will have",
      b: "am",
      c: "was",
      d: "have been",
    },
    answer: "a",
    explanation:
      "Indicates that studying will be ongoing for a specified duration.",
  },
  {
    id: 2,
    question:
      "She ______ been working at the company for five years by next month.",
    options: {
      a: "will have",
      b: "is",
      c: "was",
      d: "has been",
    },
    answer: "a",
    explanation: "Indicates that her employment will reach five years.",
  },
  {
    id: 3,
    question:
      "They ______ been playing football for two hours by the time we arrive.",
    options: {
      a: "will have",
      b: "are",
      c: "were",
      d: "have been",
    },
    answer: "a",
    explanation: "Indicates ongoing play that will continue until arrival.",
  },
  {
    id: 4,
    question: "He ______ been driving for six hours by the time he gets home.",
    options: {
      a: "will have",
      b: "is",
      c: "was",
      d: "has been",
    },
    answer: "a",
    explanation: "Indicates the duration of driving leading up to his arrival.",
  },
  {
    id: 5,
    question: "We ______ been waiting for an hour when the bus arrives.",
    options: {
      a: "will have",
      b: "are",
      c: "were",
      d: "have been",
    },
    answer: "a",
    explanation: "Indicates the waiting period before the bus arrives.",
  },
  {
    id: 6,
    question: "She ______ been practicing for weeks before the concert.",
    options: {
      a: "will have",
      b: "is",
      c: "was",
      d: "has been",
    },
    answer: "a",
    explanation: "Shows ongoing practice leading up to the concert.",
  },
  {
    id: 7,
    question:
      "They ______ been traveling for days by the time they reach their destination.",
    options: {
      a: "will have",
      b: "are",
      c: "were",
      d: "have been",
    },
    answer: "a",
    explanation: "Indicates the duration of their travel until arrival.",
  },
  {
    id: 8,
    question: "I ______ been working on this project for months.",
    options: {
      a: "will have",
      b: "am",
      c: "was",
      d: "have been",
    },
    answer: "a",
    explanation: "Indicates an ongoing effort for an extended period.",
  },
  {
    id: 9,
    question: "He ______ been watching TV for four hours straight.",
    options: {
      a: "will have",
      b: "is",
      c: "was",
      d: "has been",
    },
    answer: "a",
    explanation: "Indicates continuous viewing for a specified duration.",
  },
  {
    id: 10,
    question: "We ______ been discussing the issue for hours.",
    options: {
      a: "will have",
      b: "are",
      c: "were",
      d: "have been",
    },
    answer: "a",
    explanation: "Indicates ongoing discussion over an extended time.",
  },
  {
    id: 11,
    question: "She ______ not have been studying for the exam by then.",
    options: {
      a: "will",
      b: "is",
      c: "was",
      d: "has been",
    },
    answer: "a",
    explanation: "Indicates she will not have engaged in study.",
  },
  {
    id: 12,
    question:
      "They ______ not have been practicing enough for the competition.",
    options: {
      a: "will",
      b: "are",
      c: "were",
      d: "have been",
    },
    answer: "a",
    explanation: "Shows lack of preparation for the competition.",
  },
  {
    id: 13,
    question: "______ you have been living here for a year by next month?",
    options: {
      a: "Will",
      b: "Are",
      c: "Were",
      d: "Have",
    },
    answer: "a",
    explanation: "Inquires about the duration of residence.",
  },
  {
    id: 14,
    question: "What ______ you have been doing for the past three hours?",
    options: {
      a: "will",
      b: "are",
      c: "were",
      d: "have been",
    },
    answer: "a",
    explanation: "Inquires about activities over the past time frame.",
  },
  {
    id: 15,
    question: "He ______ not have been exercising regularly.",
    options: {
      a: "will",
      b: "is",
      c: "was",
      d: "has been",
    },
    answer: "a",
    explanation: "Indicates lack of consistent exercise.",
  },
  {
    id: 16,
    question: "We ______ have been working together for a long time.",
    options: {
      a: "will",
      b: "are",
      c: "were",
      d: "have been",
    },
    answer: "a",
    explanation: "Indicates a long duration of collaboration.",
  },
  {
    id: 17,
    question:
      "I ______ have been cleaning the house for two hours when you arrive.",
    options: {
      a: "will",
      b: "am",
      c: "was",
      d: "have been",
    },
    answer: "a",
    explanation: "Indicates ongoing cleaning until your arrival.",
  },
  {
    id: 18,
    question: "______ she have been taking care of the baby all day?",
    options: {
      a: "Will",
      b: "Is",
      c: "Was",
      d: "Has",
    },
    answer: "a",
    explanation: "Inquires about her activity regarding the baby.",
  },
  {
    id: 19,
    question: "They ______ been waiting for the train for half an hour.",
    options: {
      a: "will have",
      b: "are",
      c: "were",
      d: "have been",
    },
    answer: "a",
    explanation: "Indicates ongoing waiting period until train's arrival.",
  },
  {
    id: 20,
    question: "I ______ have been reading that book for weeks.",
    options: {
      a: "will",
      b: "am",
      c: "was",
      d: "have been",
    },
    answer: "a",
    explanation: "Indicates ongoing reading over an extended period.",
  },
  {
    question:
      "I ______ working all afternoon and have just finished the assignment.",
    options: {
      a: "have been",
      b: "had been",
      c: "shall be",
      d: "am",
    },
    answer: "a",
    reason:
      "The present perfect continuous tense 'have been' is used to describe an action that started in the past and continues up to the present.",
  },
  {
    question: "Rohan ______ the movie before he read the review.",
    options: {
      a: "watches",
      b: "have watched",
      c: "had watched",
      d: "was watching",
    },
    answer: "c",
    reason:
      "'Had watched' is past perfect tense, which is used to show an action that was completed before another past action.",
  },
  {
    question:
      "He ______ in the States but he still does not have a command over the English language.",
    options: {
      a: "have been living",
      b: "has been living",
      c: "have lived",
      d: "living",
    },
    answer: "b",
    reason:
      "'Has been living' is in present perfect continuous tense, used to describe an action that started in the past and is still continuing.",
  },
  {
    question: "By the next month, we shall ______ the project.",
    options: {
      a: "has completed",
      b: "completing",
      c: "completed",
      d: "have completed",
    },
    answer: "d",
    reason:
      "'Shall have completed' is the future perfect tense, used to indicate that an action will be completed before a certain time in the future.",
  },
  {
    question: "Every boy and girl ______ in the class today.",
    options: {
      a: "are present",
      b: "is present",
      c: "have present",
      d: "had present",
    },
    answer: "b",
    reason:
      "When using 'every,' the verb is singular, so 'is present' is the correct choice.",
  },
  {
    question: "He ______ daily for a year now.",
    options: {
      a: "exercises",
      b: "was exercising",
      c: "has been exercising",
      d: "have been exercising",
    },
    answer: "c",
    reason:
      "'Has been exercising' is present perfect continuous tense, indicating a repetitive action started in the past and continues in the present.",
  },
  {
    question: "I ______ this book since morning.",
    options: {
      a: "had been reading",
      b: "has been reading",
      c: "have had read",
      d: "shall be reading",
    },
    answer: "a",
    reason:
      "'Had been reading' is past perfect continuous, used to describe an action that was ongoing at some point in the past.",
  },
  {
    question: "Which tense is used to express general truths and facts?",
    options: {
      a: "Present continuous tense",
      b: "Present perfect tense",
      c: "Past perfect tense",
      d: "Present indefinite tense",
    },
    answer: "d",
    reason:
      "Present indefinite tense is used to express general truths, habits, or facts.",
  },
  {
    question:
      "According to the prevailing rate, two dozen ______ rupees one hundred.",
    options: {
      a: "costs",
      b: "cost",
      c: "costing",
      d: "costed",
    },
    answer: "b",
    reason:
      "'Cost' is the correct form because 'dozen' is treated as a plural noun here.",
  },
  {
    question: "The Council ______ made its decision.",
    options: {
      a: "have",
      b: "have had",
      c: "has",
      d: "having",
    },
    answer: "c",
    reason:
      "The word 'Council' is a collective noun and is treated as singular, so 'has' is correct.",
  },
  {
    question: "What do tenses as the form of a verb help to determine?",
    options: {
      a: "The time of the action",
      b: "The state of the action",
      c: "Both (A) and (B)",
      d: "The number of action",
    },
    answer: "c",
    reason: "Tenses help determine both the time and the state of an action.",
  },
  {
    question:
      "Which tense is used to show the completion of an action by a certain time in the future?",
    options: {
      a: "Future perfect tense",
      b: "Present indefinite tense",
      c: "Future perfect continuous tense",
      d: "Both (A) and (C)",
    },
    answer: "d",
    reason:
      "Both future perfect and future perfect continuous tenses can show actions completed by a specific time.",
  },
  {
    question:
      "Identify the tense:'When I reached the bookstore, all the copies had already been sold.'",
    options: {
      a: "Past perfect tense",
      b: "Past indefinite tense",
      c: "Present perfect tense",
      d: "Present indefinite tense",
    },
    answer: "a",
    reason:
      "Past perfect tense shows an action that was completed before another action in the past.",
  },
  {
    question: "The wise leader and politician ______ assassinated.",
    options: {
      a: "are",
      b: "has been",
      c: "have been",
      d: "have had been",
    },
    answer: "b",
    reason:
      "'Has been' is used as the subject is singular, despite referring to two titles.",
  },
  {
    question: "Neither of the paintings ______ sold.",
    options: {
      a: "have been",
      b: "were",
      c: "are",
      d: "was",
    },
    answer: "d",
    reason:
      "When 'neither' is used, the verb is singular, so 'was' is correct.",
  },
  {
    question: "Sita or her brothers ______ to be blamed.",
    options: {
      a: "is",
      b: "has",
      c: "are",
      d: "was",
    },
    answer: "c",
    reason:
      "When two subjects are connected by 'or,' the verb agrees with the subject closer to it.",
  },
  {
    question: "The Chief guest, with his wife, ______.",
    options: {
      a: "has left",
      b: "are leaving",
      c: "have left",
      d: "left",
    },
    answer: "a",
    reason:
      "The subject is singular (The Chief guest), so 'has left' is correct.",
  },
  {
    question: "The quality of products ______ over time.",
    options: {
      a: "are degrading",
      b: "has been degrading",
      c: "have degrading",
      d: "were degraded",
    },
    answer: "b",
    reason:
      "The subject 'quality' is singular, so 'has been degrading' is the correct form.",
  },
  {
    question: "The news ______ not updated timely.",
    options: {
      a: "were",
      b: "have",
      c: "is",
      d: "are",
    },
    answer: "c",
    reason: "'News' is singular, so 'is' is the correct verb form.",
  },
  {
    question: "They ______ into their cars and drove away.",
    options: {
      a: "has got",
      b: "have got",
      c: "gets",
      d: "got",
    },
    answer: "d",
    reason: "The sentence is in past tense, so 'got' is the correct choice.",
  },
  {
    question: "The book ______ on the table.",
    options: {
      a: "are",
      b: "is",
      c: "were",
      d: "being",
    },
    answer: "b",
    reason: "'Is' is correct because the subject 'book' is singular.",
  },
  {
    question: "The sun ______ in the east.",
    options: {
      a: "rise",
      b: "rises",
      c: "rose",
      d: "rising",
    },
    answer: "b",
    reason:
      "'Rises' is used for general truths, and the present indefinite tense is correct.",
  },
  {
    question: "The children ______ playing in the park.",
    options: {
      a: "is",
      b: "was",
      c: "are",
      d: "were",
    },
    answer: "c",
    reason: "'Are' is correct because the subject 'children' is plural.",
  },
  {
    question: "She ______ to the market every day.",
    options: {
      a: "go",
      b: "going",
      c: "goes",
      d: "gone",
    },
    answer: "c",
    reason:
      "'Goes' is present indefinite tense used to describe habitual actions.",
  },
  {
    question: "They ______ their work already.",
    options: {
      a: "have finished",
      b: "finishing",
      c: "will finish",
      d: "finished",
    },
    answer: "a",
    reason:
      "Present perfect tense 'have finished' is used to describe an action completed in the recent past.",
  },
  {
    question: "I ______ him yesterday.",
    options: {
      a: "see",
      b: "saw",
      c: "seen",
      d: "seeing",
    },
    answer: "b",
    reason:
      "Past indefinite tense 'saw' is used to describe an action completed in the past.",
  },
  {
    question: "He ______ his homework before going out to play.",
    options: {
      a: "has finished",
      b: "had finished",
      c: "will finish",
      d: "finish",
    },
    answer: "b",
    reason:
      "Past perfect tense 'had finished' shows that the homework was completed before another action.",
  },
  {
    question: "By this time next year, she ______ her studies.",
    options: {
      a: "will complete",
      b: "will have completed",
      c: "completes",
      d: "has completed",
    },
    answer: "b",
    reason:
      "Future perfect tense 'will have completed' shows the completion of an action by a specified time in the future.",
  },
  {
    question:
      "We ______ on the project for three months by the end of this week.",
    options: {
      a: "have been working",
      b: "will have been working",
      c: "worked",
      d: "work",
    },
    answer: "b",
    reason:
      "Future perfect continuous tense 'will have been working' is used to show an ongoing action that will be completed by a specific time in the future.",
  },
  {
    question: "She ______ when I entered the room.",
    options: {
      a: "is reading",
      b: "was reading",
      c: "reads",
      d: "read",
    },
    answer: "b",
    reason:
      "Past continuous tense 'was reading' is used to describe an action that was ongoing in the past.",
  },
  {
    question: "She ______ the guitar for five years by the end of this year.",
    options: {
      a: "has played",
      b: "had played",
      c: "will have played",
      d: "is playing",
    },
    answer: "c",
    reason:
      "The future perfect tense 'will have played' shows an action that will be completed by a certain point in the future.",
  },
  {
    question: "He ______ when the bell rang.",
    options: {
      a: "is sleeping",
      b: "was sleeping",
      c: "has slept",
      d: "slept",
    },
    answer: "b",
    reason:
      "Past continuous tense 'was sleeping' indicates an ongoing action in the past interrupted by another event.",
  },
  {
    question: "They ______ for a walk every evening.",
    options: {
      a: "go",
      b: "going",
      c: "went",
      d: "gone",
    },
    answer: "a",
    reason:
      "Present indefinite tense 'go' is used to describe habitual actions.",
  },
  {
    question: "I ______ my friend tomorrow.",
    options: {
      a: "am meeting",
      b: "meet",
      c: "met",
      d: "was meeting",
    },
    answer: "a",
    reason:
      "'Am meeting' is present continuous tense used to describe a planned future event.",
  },
  {
    question: "By the time you arrive, we ______ the movie.",
    options: {
      a: "will finish",
      b: "finished",
      c: "will have finished",
      d: "are finishing",
    },
    answer: "c",
    reason:
      "Future perfect tense 'will have finished' indicates an action that will be completed by a certain time in the future.",
  },
  {
    question: "He ______ his homework before the teacher asked for it.",
    options: {
      a: "has finished",
      b: "had finished",
      c: "finished",
      d: "was finishing",
    },
    answer: "b",
    reason:
      "Past perfect tense 'had finished' is used to show an action that was completed before another past event.",
  },
  {
    question: "At 9 PM yesterday, I ______ TV.",
    options: {
      a: "watched",
      b: "am watching",
      c: "was watching",
      d: "watch",
    },
    answer: "c",
    reason:
      "Past continuous tense 'was watching' is used to indicate an ongoing action in the past.",
  },
  {
    question: "By next month, they ______ in their new house.",
    options: {
      a: "will be living",
      b: "live",
      c: "lived",
      d: "are living",
    },
    answer: "a",
    reason:
      "Future continuous tense 'will be living' is used to describe an action that will be ongoing at a specific point in the future.",
  },
  {
    question: "I ______ him yesterday.",
    options: {
      a: "saw",
      b: "see",
      c: "will see",
      d: "am seeing",
    },
    answer: "a",
    reason:
      "Past indefinite tense 'saw' is used to describe an action that took place in the past.",
  },
  {
    question: "She ______ to the store later today.",
    options: {
      a: "goes",
      b: "is going",
      c: "has gone",
      d: "will have gone",
    },
    answer: "b",
    reason:
      "Present continuous tense 'is going' is used to describe a future event that is planned.",
  },
  {
    question: "I ______ this book since last week.",
    options: {
      a: "have been reading",
      b: "was reading",
      c: "read",
      d: "am reading",
    },
    answer: "a",
    reason:
      "Present perfect continuous tense 'have been reading' is used to describe an action that started in the past and is still continuing.",
  },
  {
    question: "He ______ by the time I arrived.",
    options: {
      a: "left",
      b: "has left",
      c: "had left",
      d: "leaves",
    },
    answer: "c",
    reason:
      "Past perfect tense 'had left' shows an action that was completed before another past action.",
  },
  {
    question: "They ______ the match before it started raining.",
    options: {
      a: "have finished",
      b: "finished",
      c: "had finished",
      d: "were finishing",
    },
    answer: "c",
    reason:
      "Past perfect tense 'had finished' indicates an action completed before another past event.",
  },
  {
    question: "I ______ him by the end of this week.",
    options: {
      a: "will meet",
      b: "meet",
      c: "met",
      d: "am meeting",
    },
    answer: "a",
    reason:
      "Future indefinite tense 'will meet' is used for actions that will happen in the future.",
  },
  {
    question: "She ______ the room when I walked in.",
    options: {
      a: "was cleaning",
      b: "cleaned",
      c: "is cleaning",
      d: "will clean",
    },
    answer: "a",
    reason:
      "Past continuous tense 'was cleaning' describes an action that was ongoing when another action occurred.",
  },
  {
    question: "We ______ the new movie next weekend.",
    options: {
      a: "watch",
      b: "watched",
      c: "will be watching",
      d: "watching",
    },
    answer: "c",
    reason:
      "Future continuous tense 'will be watching' is used to describe an action that will be ongoing at a specific future time.",
  },
  {
    question: "She ______ when I saw her last.",
    options: {
      a: "is crying",
      b: "was crying",
      c: "has cried",
      d: "cried",
    },
    answer: "b",
    reason:
      "Past continuous tense 'was crying' describes an action that was ongoing in the past.",
  },
  {
    question: "By the end of this month, they ______ for six months.",
    options: {
      a: "will work",
      b: "will have worked",
      c: "have worked",
      d: "are working",
    },
    answer: "b",
    reason:
      "Future perfect tense 'will have worked' shows an action that will be completed by a certain time in the future.",
  },
  {
    question: "He ______ here for two years by next month.",
    options: {
      a: "has been living",
      b: "will have been living",
      c: "lives",
      d: "lived",
    },
    answer: "b",
    reason:
      "Future perfect continuous tense 'will have been living' indicates an action that will continue up to a specific point in the future.",
  },
  {
    question: "I ______ for the exam all week.",
    options: {
      a: "studied",
      b: "am studying",
      c: "have been studying",
      d: "study",
    },
    answer: "c",
    reason:
      "Present perfect continuous tense 'have been studying' describes an action that started in the past and is ongoing.",
  },
  {
    question: "They ______ the project by next year.",
    options: {
      a: "finish",
      b: "will have finished",
      c: "finished",
      d: "are finishing",
    },
    answer: "b",
    reason:
      "Future perfect tense 'will have finished' is used to describe an action that will be completed before a specified future time.",
  },
  {
    question: "The team ______ the game by the time I arrived.",
    options: {
      a: "won",
      b: "had won",
      c: "will win",
      d: "wins",
    },
    answer: "b",
    reason:
      "Past perfect tense 'had won' is used to show an action that was completed before another past action.",
  },
  {
    question: "We ______ to the museum last weekend.",
    options: {
      a: "went",
      b: "go",
      c: "are going",
      d: "will go",
    },
    answer: "a",
    reason:
      "Past indefinite tense 'went' describes a completed action in the past.",
  },
  {
    question: "He ______ his homework before dinner.",
    options: {
      a: "finishes",
      b: "finished",
      c: "has finished",
      d: "will finish",
    },
    answer: "b",
    reason:
      "Past indefinite tense 'finished' is used to describe an action completed in the past.",
  },
  {
    question: "They ______ at the meeting yesterday.",
    options: {
      a: "are",
      b: "were",
      c: "was",
      d: "be",
    },
    answer: "b",
    reason: "'Were' is the correct past form of 'to be' for plural subjects.",
  },
  {
    question: "I ______ to the store every week.",
    options: {
      a: "go",
      b: "went",
      c: "am going",
      d: "will go",
    },
    answer: "a",
    reason: "Present indefinite tense 'go' is used for habitual actions.",
  },

  // Total of 100 questions complete

  // tenses from examveda starts here
  {
    id: 1,
    question: "Identify the tense: I have been working on the problem.",
    options: {
      a: "Present Continuous",
      b: "Present Perfect Continuous",
      c: "Past Perfect",
      d: "Past Continuous",
    },
    answer: "b",
    explanation:
      "The sentence 'I have been working on the problem' is in the Present Perfect Continuous tense, indicating an action that started in the past and is still continuing.",
  },
  {
    id: 2,
    question: "Identify the tense: They will have been writing their letters.",
    options: {
      a: "Future Perfect Continuous",
      b: "Future Continuous",
      c: "Present Perfect Continuous",
      d: "Present Perfect",
    },
    answer: "a",
    explanation:
      "The sentence 'They will have been writing their letters' is in the Future Perfect Continuous tense, showing an ongoing action that will have been happening at a specific time in the future.",
  },
  {
    id: 3,
    question: "Identify the tense: I will represent him in court.",
    options: {
      a: "Simple Present",
      b: "Simple Future",
      c: "Simple Past",
      d: "Future Continuous",
    },
    answer: "b",
    explanation:
      "The sentence 'I will represent him in court' is in the Simple Future tense, indicating a future action.",
  },
  {
    id: 4,
    question: "Identify the tense: I will give him a gift.",
    options: {
      a: "Simple Present",
      b: "Simple Past",
      c: "Present Continuous",
      d: "Simple Future",
    },
    answer: "d",
    explanation:
      "The sentence 'I will give him a gift' is in the Simple Future tense, expressing a future action.",
  },
  {
    id: 5,
    question: "Identify the tense: They are working on the project together.",
    options: {
      a: "Simple Present",
      b: "Present Continuous",
      c: "Simple Past",
      d: "Past Continuous",
    },
    answer: "b",
    explanation:
      "The sentence 'They are working on the project together' is in the Present Continuous tense, showing an action that is happening right now.",
  },
  {
    id: 6,
    question:
      "Identify the form of the Future Simple Tense from the given options:",
    options: {
      a: "Subject + simple future of the verb 'to be' + present participle",
      b: "Subject + simple future of the verb 'to have' + past participle",
      c: "Subject + simple future of the verb 'to do' + present participle",
      d: "Subject + simple future of the verb 'to be' + past participle",
    },
    answer: "a",
    explanation:
      "The correct form of the Future Simple tense uses 'Subject + simple future of the verb 'to be' + present participle'.",
  },
  {
    id: 7,
    question: "Identify the tense: She speaks well.",
    options: {
      a: "Present Perfect",
      b: "Simple Present",
      c: "Present Continuous",
      d: "Simple Future",
    },
    answer: "b",
    explanation:
      "The sentence 'She speaks well' is in the Simple Present tense, indicating a general or habitual action.",
  },
  {
    id: 8,
    question: "Identify the tense: She has eaten her food.",
    options: {
      a: "Simple Present",
      b: "Present Perfect",
      c: "Simple Past",
      d: "Past Perfect",
    },
    answer: "b",
    explanation:
      "The sentence 'She has eaten her food' is in the Present Perfect tense, showing that the action has been completed in the present.",
  },
  {
    id: 9,
    question: "Choose the most appropriate word: I'll help him if he ______.",
    options: {
      a: "ask",
      b: "asked",
      c: "asks",
      d: "will ask",
    },
    answer: "c",
    explanation:
      "'I'll help him if he asks' is the correct usage because 'asks' fits the conditional clause in the sentence.",
  },
  {
    id: 10,
    question: "Choose the most appropriate word: The war ______ in 1937.",
    options: {
      a: "start",
      b: "will start",
      c: "is starting",
      d: "started",
    },
    answer: "d",
    explanation:
      "The correct sentence is 'The war started in 1937, using the Simple Past tense to indicate a past event.",
  },
  {
    id: 11,
    question:
      "Fill in the blanks with the most appropriate words: Look! There ______ a man sitting at the first table near the door. He ______ at us.",
    options: {
      a: "was/looks",
      b: "had been/looked",
      c: "were/had looked",
      d: "is/is looking",
    },
    answer: "d",
    explanation:
      "The present continuous tense is used here because it describes an ongoing action happening right now.",
  },
  {
    id: 12,
    question:
      "North Korea still ______ a vast police state that ______ a network of concentration camps spanning the country.",
    options: {
      a: "was maintaining/has included",
      b: "had maintained/would include",
      c: "is maintaining/had included",
      d: "maintains/includes",
      e: "maintained/will include",
    },
    answer: "d",
    explanation:
      "The simple present tense is appropriate as this is a current fact about North Korea.",
  },
  {
    id: 13,
    question:
      "Complete the given sentence using appropriate form of the verb: I'm too tired to walk home. I think ______ a taxi.",
    options: {
      a: "I have got",
      b: "I am getting",
      c: "I got",
      d: "I'll get",
    },
    answer: "d",
    explanation:
      "The future tense 'I'll get' is used to express a spontaneous decision made at the moment.",
  },
  {
    id: 14,
    question:
      "A: Is that your pure wool pullover in the washing machine? It ______ you know! B: No, I ______ it several times in the machine already. I use the wool cycle and it's fine.",
    options: {
      a: "was shrinking",
      b: "has shrunk",
      c: "will shrink",
      d: "is going to shrink",
      e: "is shrinking",
    },
    answer: "e",
    explanation:
      "The present continuous is used because it describes an action happening now (shrinking).",
  },
  {
    id: 15,
    question: "The hens ______ into the house if you had shut the door.",
    options: {
      a: "would not have got",
      b: "did not get",
      c: "does not get",
      d: "not got",
    },
    answer: "a",
    explanation:
      "The past conditional tense 'would not have got' is used to express what could have happened if the door had been shut.",
  },
  {
    id: 16,
    question: "Identify the tense: He has called out to him.",
    options: {
      a: "Simple Past",
      b: "Past Perfect",
      c: "Present Perfect",
      d: "Present Perfect Continuous",
    },
    answer: "c",
    explanation:
      "This sentence uses the present perfect tense, which connects a past action to the present.",
  },
  {
    id: 17,
    question:
      "Fill in the blank with the most appropriate word: Where is Comrade A? He ______ tennis.",
    options: {
      a: "plays",
      b: "is playing",
      c: "played",
      d: "has been playing",
    },
    answer: "b",
    explanation:
      "The present continuous tense 'is playing' describes an action happening right now.",
  },
  {
    id: 18,
    question:
      "Fill in the blank with the most appropriate word: Look at the little boys! They ______ with stones.",
    options: {
      a: "play",
      b: "will play",
      c: "are playing",
      d: "is playing",
    },
    answer: "c",
    explanation:
      "'Are playing' is used because the boys are currently playing with stones.",
  },
  {
    id: 19,
    question:
      "Fill in the blank with the most appropriate word with the help of the hint in the brackets: The population of the world ______ very fast. (Happening right now)",
    options: {
      a: "rise",
      b: "rises",
      c: "is rising",
      d: "rose",
    },
    answer: "c",
    explanation:
      "The present continuous 'is rising' is used for an action happening right now.",
  },
  {
    id: 20,
    question:
      "Complete the sentence with the appropriate form of the given verb: They've invited me to their house. They ______ (be) offended if I don't go.",
    options: {
      a: "are being",
      b: "will be",
      c: "are",
      d: "have been",
    },
    answer: "b",
    explanation: "'Will be' is used to describe a future outcome.",
  },
  {
    id: 21,
    question:
      "Fill in the blank with the most appropriate word: A: Can I speak to Mr. Rich? B: I'm sorry, he ______.",
    options: {
      a: "open",
      b: "live",
      c: "speak",
      d: "take",
    },
    answer: "c",
    explanation:
      "'Speak' is appropriate as the verb that fits the context of a conversation.",
  },
  {
    id: 22,
    question: "My parents _____ in a very small flat.",
    options: {
      a: "live",
      b: "opens",
      c: "speak",
      d: "take",
    },
    answer: "a",
    explanation:
      "'Live' is used here in the present simple tense, describing a habitual action.",
  },
  {
    id: 23,
    question:
      "Fill in the blank with the most appropriate word: Princess Diana_____ in 1997.",
    options: {
      a: "die",
      b: "died",
      c: "dies",
      d: "dye",
    },
    answer: "b",
    explanation:
      "The past simple tense 'died' is used to refer to a specific event in the past.",
  },
  {
    id: 24,
    question:
      "The last time we ______ dinner with them, they ______ for a new house.",
    options: {
      a: "have, looked",
      b: "had, were looking",
      c: "were, looking",
      d: "had, looked",
    },
    answer: "b",
    explanation:
      "Past continuous tense 'were looking' shows an ongoing action in the past.",
  },
  {
    id: 25,
    question:
      "Fill in the blanks with the most appropriate option: Why ______ you come yesterday? We ____ a good time.",
    options: {
      a: "didn't, had",
      b: "did, have",
      c: "don't, have",
      d: "were, had",
    },
    answer: "a",
    explanation: "'Didn’t' and 'had' are used to express actions in the past.",
  },
  {
    id: 26,
    question:
      "Fill in the blank with the most appropriate word: He ______ an aspirin half an hour ago.",
    options: {
      a: "took",
      b: "takes",
      c: "taken",
      d: "take",
    },
    answer: "a",
    explanation:
      "The simple past tense 'took' is used for an action completed in the past.",
  },
  {
    id: 27,
    question:
      "Fill in the blank with the most appropriate option: He ___ out five minutes ago.",
    options: {
      a: "went",
      b: "was",
      c: "has",
      d: "is",
    },
    answer: "a",
    explanation:
      "'Went' is in the past simple, indicating an action completed a few minutes ago.",
  },
  {
    id: 28,
    question:
      "The Bastille Prison, where many important people ______ at one time imprisoned, ______ today visited by tourists.",
    options: {
      a: "were, is",
      b: "was, is",
      c: "are, have",
      d: "are, was",
    },
    answer: "b",
    explanation:
      "The sentence describes past events with 'was' and current situations with 'is.'",
  },
  {
    id: 29,
    question:
      "Choose from the options given below so as to complete the sentence correctly: I ______ on this project for months without success.",
    options: {
      a: "had been working",
      b: "have been working",
      c: "was working",
      d: "worked",
    },
    answer: "b",
    explanation:
      "Present perfect continuous is used to show an action that started in the past and continues now.",
  },
  {
    id: 30,
    question:
      "Fill in the blank with the most appropriate word: I'll stay home if it ______.",
    options: {
      a: "is sleeping",
      b: "sleeps",
      c: "slept",
      d: "was sleeping",
    },
    answer: "a",
    explanation:
      "Present continuous is used for an ongoing or future event, depending on context.",
  },
  {
    id: 41,
    question: "You ______ for being late to the party.",
    options: {
      a: "apologized",
      b: "apologizing",
      c: "are apologizing",
      d: "apologize",
    },
    answer: "b",
  },
  {
    id: 42,
    question:
      "Fill in the blank using the appropriate verb form: Can you wait for me? It ______ very long.",
    options: {
      a: "won't take",
      b: "isn't taking",
      c: "doesn't take",
      d: "wasn't taking",
    },
    answer: "a",
  },
  {
    id: 43,
    question:
      "In the blanks with the most appropriate option: My dog______a lot but it ______ at the moment.",
    options: {
      a: "barks, isn't barking",
      b: "barked, doesn't bark",
      c: "barks, doesn't bark",
      d: "was barking, isn't barking",
    },
    answer: "c",
  },
  {
    id: 44,
    question:
      "My son ______ very well at university this term because he ______ out late at night anymore.",
    options: {
      a: "is doing, doesn't go",
      b: "doesn't do, goes",
      c: "did, doesn't go",
      d: "was doing, won't go",
    },
    answer: "a",
  },
  {
    id: 45,
    question:
      "Fill in the blank with the most appropriate word: The computer ______ guaranteed by the company.",
    options: {
      a: "is",
      b: "was",
      c: "has been",
      d: "were",
    },
    answer: "c",
  },
  {
    id: 46,
    question:
      "Fill in the blank with the most appropriate option: Who ______ to see me last week?",
    options: {
      a: "came",
      b: "was coming",
      c: "had come",
      d: "did come",
    },
    answer: "a",
  },
  {
    id: 47,
    question:
      "Fill in the blank with the most appropriate word: She ______ the meeting on Friday.",
    options: {
      a: "is holding",
      b: "holds",
      c: "held",
      d: "hold",
    },
    answer: "a",
  },
  {
    id: 48,
    question:
      "Fill in the blank with the most appropriate word: I think he ______ the answers to the questions.",
    options: {
      a: "knows",
      b: "knew",
      c: "has known",
      d: "know",
    },
    answer: "a",
  },
  {
    id: 49,
    question:
      "Fill in the blank with the most appropriate word: The cake ______ by the time the guests arrived.",
    options: {
      a: "had eaten",
      b: "had been eaten",
      c: "was eaten",
      d: "was eating",
    },
    answer: "b",
  },
  {
    id: 50,
    question:
      "Fill in the blank with the most appropriate word: If it ______ tomorrow, we will cancel the trip.",
    options: {
      a: "rains",
      b: "rain",
      c: "will rain",
      d: "is raining",
    },
    answer: "a",
  },
  {
    id: 51,
    question:
      "Fill in the blank with the most appropriate word: She has ______ her homework already.",
    options: {
      a: "finished",
      b: "finish",
      c: "finishing",
      d: "finishes",
    },
    answer: "a",
  },
  {
    id: 52,
    question: "Choose the correct option: They______the movie last night.",
    options: {
      a: "saw",
      b: "see",
      c: "seen",
      d: "seeing",
    },
    answer: "a",
  },
  {
    id: 53,
    question:
      "Fill in the blank with the most appropriate word: The book ______ on the table.",
    options: {
      a: "is lying",
      b: "lies",
      c: "lay",
      d: "laying",
    },
    answer: "b",
  },
  {
    id: 54,
    question:
      "Fill in the blank with the most appropriate word: She ______ in Paris for two years.",
    options: {
      a: "has lived",
      b: "lived",
      c: "is living",
      d: "lives",
    },
    answer: "a",
  },
  {
    id: 55,
    question:
      "Fill in the blank with the most appropriate word: The children ______ to the park every Sunday.",
    options: {
      a: "go",
      b: "went",
      c: "going",
      d: "gone",
    },
    answer: "a",
  },
  {
    id: 56,
    question:
      "Fill in the blank with the most appropriate word: If I ______ enough money, I would travel the world.",
    options: {
      a: "had",
      b: "have",
      c: "will have",
      d: "would have",
    },
    answer: "a",
  },
  {
    id: 57,
    question:
      "Fill in the blank with the most appropriate word: The flowers ______ beautifully in the garden.",
    options: {
      a: "bloom",
      b: "blooms",
      c: "bloomed",
      d: "blooming",
    },
    answer: "a",
  },
  {
    id: 58,
    question:
      "Choose the correct option: She ______ her keys at home yesterday.",
    options: {
      a: "forgot",
      b: "forgets",
      c: "forgetting",
      d: "has forgotten",
    },
    answer: "a",
  },
  {
    id: 59,
    question:
      "Fill in the blank with the most appropriate word: The train ______ at 10 AM.",
    options: {
      a: "leaves",
      b: "left",
      c: "leave",
      d: "is leaving",
    },
    answer: "a",
  },
  {
    id: 60,
    question:
      "Fill in the blank with the most appropriate word: We ______ lunch when the phone rang.",
    options: {
      a: "were having",
      b: "had",
      c: "have",
      d: "are having",
    },
    answer: "a",
  },
  {
    id: 61,
    question:
      "Fill in the blank with the most appropriate word: They ______ a new car last month.",
    options: {
      a: "bought",
      b: "buy",
      c: "buys",
      d: "buying",
    },
    answer: "a",
  },
  {
    id: 62,
    question:
      "Fill in the blank with the most appropriate word: He always ______ coffee in the morning.",
    options: {
      a: "drinks",
      b: "drank",
      c: "drink",
      d: "drinking",
    },
    answer: "a",
  },
  {
    id: 63,
    question:
      "Fill in the blank with the most appropriate word: The movie ______ at the cinema last week.",
    options: {
      a: "was showing",
      b: "showed",
      c: "shows",
      d: "showing",
    },
    answer: "b",
  },
  {
    id: 64,
    question:
      "Fill in the blank with the most appropriate word: The cake ______ very delicious.",
    options: {
      a: "tastes",
      b: "taste",
      c: "tasted",
      d: "tasting",
    },
    answer: "a",
  },
  {
    id: 65,
    question:
      "Fill in the blank with the most appropriate word: She ______ to the gym every day.",
    options: {
      a: "goes",
      b: "went",
      c: "is going",
      d: "going",
    },
    answer: "a",
  },
  {
    id: 66,
    question: "Choose the correct option: I ______ breakfast at 7 AM today.",
    options: {
      a: "had",
      b: "have",
      c: "have had",
      d: "was having",
    },
    answer: "a",
  },
  {
    id: 67,
    question:
      "Fill in the blank with the most appropriate word: She ______ to the party last Saturday.",
    options: {
      a: "didn't go",
      b: "doesn't go",
      c: "won't go",
      d: "doesn't went",
    },
    answer: "a",
  },
  {
    id: 68,
    question:
      "Fill in the blank with the most appropriate word: If it ______ tomorrow, we will go to the beach.",
    options: {
      a: "isn't raining",
      b: "doesn't rain",
      c: "wasn't raining",
      d: "hasn't rained",
    },
    answer: "b",
  },
  {
    id: 69,
    question:
      "Fill in the blank with the most appropriate word: They ______ in the garden when it started to rain.",
    options: {
      a: "were playing",
      b: "played",
      c: "are playing",
      d: "was playing",
    },
    answer: "a",
  },
  {
    id: 70,
    question:
      "Fill in the blank with the most appropriate word: The sun ______ in the east.",
    options: {
      a: "rises",
      b: "rose",
      c: "risen",
      d: "rising",
    },
    answer: "a",
  },
  {
    id: 101,
    question:
      "By the time we ______ our preparations for the congress, most of the participants ______ at the hall.",
    options: {
      a: "had finished",
      b: "have finished",
      c: "will have finished",
      d: "finished",
    },
    answer: "a",
    explanation:
      "The past perfect 'had finished' indicates that the preparations were completed before the participants arrived.",
  },
  {
    id: 102,
    question:
      "A: What would you like to eat? B: ______ a sandwich, please. (I/have)",
    options: {
      a: "I’ll have",
      b: "I have",
      c: "I had",
      d: "I was having",
    },
    answer: "a",
    explanation:
      "'I’ll have' is the correct future form that fits the request for a menu choice.",
  },
  {
    id: 103,
    question:
      "One feels that there ______ any noticeable improvement in the human rights problem in Africa until all the African countries ______ their economic difficulties.",
    options: {
      a: "won't be / overcome",
      b: "is / overcame",
      c: "was / was overcoming",
      d: "are / were overcoming",
    },
    answer: "a",
    explanation:
      "The phrase 'won't be' indicates a future expectation, while 'overcome' suggests resolving economic difficulties.",
  },
  {
    id: 104,
    question:
      "People go to the tomb of the Unknown Soldier to stand in silence for a minute to honor the memory of those who ____ in wars.",
    options: {
      a: "were killed",
      b: "are killed",
      c: "was killed",
      d: "will be killed",
    },
    answer: "a",
    explanation:
      "'Were killed' is the correct past passive form to honor those who died in wars.",
  },
  {
    id: 105,
    question:
      "No zoologist ______ able to keep a gorilla under close observation in the dark jungles in which he ______.",
    options: {
      a: "has been / has lived",
      b: "was / lived",
      c: "is / lives",
      d: "will be / will live",
    },
    answer: "a",
    explanation:
      "The present perfect 'has been' emphasizes that it's an ongoing situation, while 'has lived' denotes the gorilla's past existence.",
  },
  {
    id: 106,
    question: "We must do something soon before it ______(be) too late.",
    options: {
      a: "is",
      b: "was",
      c: "be",
      d: "will be",
    },
    answer: "a",
    explanation: "'Is' indicates the present urgency of the situation.",
  },
  {
    id: 107,
    question:
      "What I ______ is that we ______ to think seriously about a thorough reform in the legal system.",
    options: {
      a: "propose",
      b: "proposed",
      c: "will propose",
      d: "was proposing",
    },
    answer: "a",
    explanation:
      "The present simple 'propose' suggests an ongoing consideration.",
  },
  {
    id: 108,
    question: "You should ______ exercise daily.",
    options: {
      a: "exercise",
      b: "exercises",
      c: "exercised",
      d: "was exercising",
    },
    answer: "a",
    explanation: "The base form 'exercise' correctly completes the suggestion.",
  },
  {
    id: 109,
    question: "They ______ to London in 1995.",
    options: {
      a: "moved",
      b: "move",
      c: "moving",
      d: "have moved",
    },
    answer: "a",
    explanation:
      "'Moved' is the past simple tense indicating a completed action in 1995.",
  },
  {
    id: 110,
    question: "He has been ______ the plants for two hours.",
    options: {
      a: "watering",
      b: "watered",
      c: "waters",
      d: "water",
    },
    answer: "a",
    explanation:
      "The present participle 'watering' shows the action is ongoing.",
  },
  {
    id: 111,
    question: "We ______ breakfast in bed.",
    options: {
      a: "had",
      b: "have",
      c: "have had",
      d: "were having",
    },
    answer: "a",
    explanation: "'Had' suggests that the action was completed in the past.",
  },
  {
    id: 112,
    question:
      "To the astronomers of the Middle Ages, the most important classical authorities on natural philosophy ______ Aristotle and Ptolemy, since both ______ frameworks that explained the whole universe.",
    options: {
      a: "were / had created",
      b: "was / created",
      c: "are / are creating",
      d: "have been / created",
    },
    answer: "a",
    explanation:
      "The past simple 'were' and past perfect 'had created' suggest that Aristotle and Ptolemy were foundational figures.",
  },
  {
    id: 113,
    question:
      "As my son ______ down by the river, I ______ his room thoroughly.",
    options: {
      a: "was fishing / cleaned",
      b: "fished / clean",
      c: "fishes / have cleaned",
      d: "is fishing / will clean",
    },
    answer: "a",
    explanation:
      "The past continuous 'was fishing' indicates an action happening while another action (cleaning) was occurring.",
  },
  {
    id: 114,
    question:
      "'When you see Ann, can you ask her to phone me?' 'Sure,______her.'",
    options: {
      a: "I’ll ask",
      b: "I asked",
      c: "I’m going to ask",
      d: "I ask",
    },
    answer: "a",
    explanation:
      "'I’ll ask' is the future form appropriate for the promise made.",
  },
  {
    id: 115,
    question: "The electric light bulb ______ by Edison.",
    options: {
      a: "was invented",
      b: "is invented",
      c: "invented",
      d: "invents",
    },
    answer: "a",
    explanation:
      "'Was invented' is the correct past passive form indicating who created the invention.",
  },
  {
    id: 116,
    question: "The peace which Istanbul once ______ . . . . away.",
    options: {
      a: "knew / has swept",
      b: "had / was sweeping",
      c: "was / has swept",
      d: "knows / sweeps",
    },
    answer: "c",
    explanation:
      "'Was' is past, while 'has swept' indicates an ongoing effect from the past.",
  },
  {
    id: 117,
    question: "'Where ___ (Martin/come) from?' 'He's Scottish.'",
    options: {
      a: "does Martin come",
      b: "do Martin come",
      c: "does Martin comes",
      d: "does Martin came",
    },
    answer: "a",
    explanation: "'Does Martin come' is the correct interrogative form.",
  },
  {
    id: 118,
    question: "They ______ a football match in the evening.",
    options: {
      a: "are playing",
      b: "played",
      c: "have played",
      d: "was playing",
    },
    answer: "a",
    explanation:
      "The present continuous 'are playing' suggests an action happening in the evening.",
  },
  {
    id: 119,
    question: "Tim ______ a master's degree as soon as he ______ to Canada.",
    options: {
      a: "will have / arrives",
      b: "has / arrive",
      c: "had / was arriving",
      d: "was going / went",
    },
    answer: "a",
    explanation:
      "'Will have' suggests a future completion of obtaining the degree after arriving.",
  },
  {
    id: 120,
    question:
      "The managing director ______ Sid to sales manager and ever since then, he ______ everybody around.",
    options: {
      a: "has promoted / has been bossing",
      b: "was promoting / bossed",
      c: "has been promoting / bossing",
      d: "promoted / was bossing",
    },
    answer: "c",
    explanation:
      "'Has been promoting' shows ongoing action since the promotion, while 'has been bossing' indicates continuous behavior.",
  },
  {
    id: 71,
    question:
      "Fill in the blank with the most appropriate word: They ______ breakfast when the phone rang.",
    options: {
      a: "had",
      b: "were having",
      c: "have",
      d: "are having",
    },
    answer: "b",
    explanation:
      "The correct answer is 'were having' because it indicates that the action was in progress when the phone rang, which is the past continuous tense.",
  },
  {
    id: 72,
    question:
      "Fill in the blank with the most appropriate word: She ______ her homework before dinner.",
    options: {
      a: "finished",
      b: "finish",
      c: "finishing",
      d: "finishes",
    },
    answer: "a",
    explanation:
      "The correct answer is 'finished' because it indicates that the action of completing the homework was completed in the past.",
  },
  {
    id: 73,
    question:
      "Fill in the blank with the most appropriate word: He ______ to the store last week.",
    options: {
      a: "goes",
      b: "going",
      c: "went",
      d: "gone",
    },
    answer: "c",
    explanation:
      "The correct answer is 'went' because it is the simple past tense of 'go', indicating that the action occurred last week.",
  },
  {
    id: 74,
    question:
      "Fill in the blank with the most appropriate word: If she ______ hard, she will pass the exam.",
    options: {
      a: "studies",
      b: "study",
      c: "studied",
      d: "studying",
    },
    answer: "a",
    explanation:
      "The correct answer is 'studies' because it follows the conditional structure, indicating a future possibility based on her action.",
  },
  {
    id: 75,
    question:
      "Fill in the blank with the most appropriate word: The teacher ______ the homework yesterday.",
    options: {
      a: "assigns",
      b: "assigned",
      c: "assigning",
      d: "assign",
    },
    answer: "b",
    explanation:
      "The correct answer is 'assigned' because it is in the past tense, indicating that the teacher gave out the homework yesterday.",
  },
  {
    id: 76,
    question:
      "Fill in the blank with the most appropriate word: I ______ my car to the mechanic.",
    options: {
      a: "took",
      b: "take",
      c: "taking",
      d: "taken",
    },
    answer: "a",
    explanation:
      "The correct answer is 'took' because it is the past tense of 'take', indicating that the action was completed in the past.",
  },
  {
    id: 77,
    question:
      "Fill in the blank with the most appropriate word: We ______ in the park every Saturday.",
    options: {
      a: "play",
      b: "played",
      c: "playing",
      d: "plays",
    },
    answer: "a",
    explanation:
      "The correct answer is 'play' because it indicates a habitual action that occurs regularly every Saturday.",
  },
  {
    id: 78,
    question:
      "Fill in the blank with the most appropriate word: The film ______ by the time we arrived.",
    options: {
      a: "had started",
      b: "started",
      c: "starts",
      d: "was starting",
    },
    answer: "a",
    explanation:
      "The correct answer is 'had started' because it shows that the action was completed before we arrived, using the past perfect tense.",
  },
  {
    id: 79,
    question:
      "Fill in the blank with the most appropriate word: They usually ______ to the gym after work.",
    options: {
      a: "go",
      b: "going",
      c: "went",
      d: "gone",
    },
    answer: "a",
    explanation:
      "The correct answer is 'go' because it describes a regular action or routine.",
  },
  {
    id: 80,
    question:
      "Fill in the blank with the most appropriate word: The book ______ interesting.",
    options: {
      a: "is",
      b: "was",
      c: "will be",
      d: "being",
    },
    answer: "a",
    explanation:
      "The correct answer is 'is' because it describes a current state or quality of the book.",
  },
  {
    id: 81,
    question:
      "Fill in the blank with the most appropriate word: She ______ to music while studying.",
    options: {
      a: "listens",
      b: "listened",
      c: "listening",
      d: "listen",
    },
    answer: "a",
    explanation:
      "The correct answer is 'listens' because it indicates a regular activity she does while studying.",
  },
  {
    id: 82,
    question:
      "Fill in the blank with the most appropriate word: If it ______ tomorrow, we will stay inside.",
    options: {
      a: "rains",
      b: "rained",
      c: "rain",
      d: "raining",
    },
    answer: "a",
    explanation:
      "The correct answer is 'rains' as it follows the first conditional structure for future events.",
  },
  {
    id: 83,
    question:
      "Fill in the blank with the most appropriate word: I ______ dinner when she called.",
    options: {
      a: "was cooking",
      b: "cooked",
      c: "cook",
      d: "cooking",
    },
    answer: "a",
    explanation:
      "The correct answer is 'was cooking' because it indicates that the action was ongoing when she called.",
  },
  {
    id: 84,
    question:
      "Fill in the blank with the most appropriate word: He ______ his homework before the meeting.",
    options: {
      a: "finishes",
      b: "finish",
      c: "finished",
      d: "finishing",
    },
    answer: "c",
    explanation:
      "The correct answer is 'finished' because it indicates that the action was completed in the past before another event.",
  },
  {
    id: 85,
    question:
      "Fill in the blank with the most appropriate word: She ______ a great time at the party last night.",
    options: {
      a: "has",
      b: "had",
      c: "have",
      d: "having",
    },
    answer: "b",
    explanation:
      "The correct answer is 'had' because it indicates that the action occurred in the past.",
  },
  {
    id: 86,
    question:
      "Fill in the blank with the most appropriate word: They ______ going to the beach if the weather is nice.",
    options: {
      a: "are",
      b: "were",
      c: "will be",
      d: "be",
    },
    answer: "a",
    explanation:
      "The correct answer is 'are' because it indicates a plan for the near future.",
  },
  {
    id: 87,
    question:
      "Fill in the blank with the most appropriate word: The children ______ outside when it started to rain.",
    options: {
      a: "played",
      b: "play",
      c: "playing",
      d: "were playing",
    },
    answer: "d",
    explanation:
      "The correct answer is 'were playing' as it indicates an ongoing action that was interrupted by another event.",
  },
  {
    id: 88,
    question:
      "Fill in the blank with the most appropriate word: He ______ a letter to his friend yesterday.",
    options: {
      a: "writes",
      b: "write",
      c: "wrote",
      d: "writing",
    },
    answer: "c",
    explanation:
      "The correct answer is 'wrote' because it is the simple past tense of 'write'.",
  },
  {
    id: 89,
    question:
      "Fill in the blank with the most appropriate word: If she ______ harder, she would have passed the test.",
    options: {
      a: "studied",
      b: "study",
      c: "studies",
      d: "studying",
    },
    answer: "a",
    explanation:
      "The correct answer is 'studied' as it uses the second conditional form to express a hypothetical situation in the past.",
  },
  {
    id: 90,
    question:
      "Fill in the blank with the most appropriate word: They ______ to a concert last night.",
    options: {
      a: "go",
      b: "went",
      c: "gone",
      d: "going",
    },
    answer: "b",
    explanation:
      "The correct answer is 'went' because it indicates an action that occurred in the past.",
  },
  {
    id: 31,
    question:
      "It's a bit cold. You decide to close the window. You say: ______",
    options: {
      A: "I think I've closed the window.",
      B: "I think I'm close the window.",
      C: "I think I'll close the window.",
      D: "I think I'd closed the window.",
    },
    answer: "C",
    explanation:
      "I'll is the contraction for I will, indicating a decision made at the moment.",
  },
  {
    id: 32,
    question: "My friend _____ for me when I arrived.",
    options: {
      A: "waited",
      B: "was waited",
      C: "was waiting",
      D: "has been waiting",
    },
    answer: "A",
    explanation:
      "Waited is the simple past form indicating an action that was completed in the past.",
  },
  {
    id: 33,
    question: "How long will she ______ in London?",
    options: {
      A: "being staying",
      B: "stays",
      C: "to stay",
      D: "stay",
    },
    answer: "D",
    explanation:
      "Stay is the correct form to use with will for future actions.",
  },
  {
    id: 34,
    question: "Every day of last week my aunt ___ a plate.",
    options: {
      A: "breaks",
      B: "broke",
      C: "was breaking",
      D: "none of these",
    },
    answer: "B",
    explanation:
      "Broke is the simple past tense form of the verb, indicating a completed action in the past.",
  },
  {
    id: 35,
    question: "I ______ an accident today. I don't know the man involved.",
    options: {
      A: "See",
      B: "Saw",
      C: "Has seen",
      D: "Had seen",
    },
    answer: "B",
    explanation:
      "Saw is the simple past form, used to indicate an action that occurred today.",
  },
  {
    id: 36,
    question:
      "In the years ahead, it seems likely that people ______ even greater control over nature.",
    options: {
      A: "to acquire",
      B: "will be acquired",
      C: "will acquire",
      D: "will have been acquired",
    },
    answer: "C",
    explanation:
      "Will acquire indicates a future action that is expected to happen.",
  },
  {
    id: 37,
    question:
      "The practice of working women ______ so widespread that the working mother ______ now not an unusual factor in the world.",
    options: {
      A: "becomes/was",
      B: "became/is",
      C: "had become/is",
      D: "has become/is",
      E: "became/was",
    },
    answer: "D",
    explanation:
      "Has become is the present perfect tense, indicating a change that has happened over time, while is indicates the current state.",
  },
  {
    id: 38,
    question: "The boss made him ____ the report all from the beginning.",
    options: {
      A: "write",
      B: "written",
      C: "wrote",
      D: "writes",
    },
    answer: "A",
    explanation:
      "Write is the base form of the verb, which follows 'made him' indicating an obligation.",
  },
  {
    id: 39,
    question:
      "Listen! The coach ______ the strengths of our opponents because our team ______ against them before.",
    options: {
      A: "has explained",
      B: "weren't playing",
      C: "explains",
      D: "won't play",
      E: "is explaining",
    },
    answer: "A",
    explanation:
      "Has explained indicates an action that has relevance to the present.",
  },
  {
    id: 40,
    question: "Last year, I ______ to Museum on holiday.",
    options: {
      A: "am going",
      B: "was going",
      C: "went",
      D: "had gone",
    },
    answer: "C",
    explanation:
      "Went is the simple past form, used for actions completed in the past.",
  },
    {
        id: 91,
        question: "It rained! he didn't think it ______.",
        options: {
            A: "is going to rain",
            B: "was going to rain",
            C: "was raining",
            D: "had rained"
        },
        answer: "B",
        explanation: "The correct form 'was going to rain' is used to express an expectation of something that was thought would happen but didn’t."
    },
    {
        id: 92,
        question: "I ______ my boss privately tomorrow and I ______ quite nervous about it.",
        options: {
            A: "have seen/am feeling",
            B: "see/was feeling",
            C: "am seeing/feel",
            D: "saw/felt",
            E: "was seeing/have felt"
        },
        answer: "C",
        explanation: "The future arrangement is expressed using 'am seeing' (present continuous), and 'feel' indicates a current state of emotion."
    },
    {
        id: 93,
        question: "I ______Tom since he ______ school.",
        options: {
            A: "have seen/leave",
            B: "saw/has left",
            C: "hadn't seen/left",
            D: "haven't seen/left"
        },
        answer: "D",
        explanation: "'Haven't seen' is in the present perfect to express an action from the past until now, and 'left' is in the simple past tense."
    },
    {
        id: 94,
        question: "His hopes of making a fortune ______ when his factory burned down.",
        options: {
            A: "were dashed",
            B: "have dashed",
            C: "was dashed",
            D: "will be dashed"
        },
        answer: "A",
        explanation: "The correct answer is 'were dashed,' which uses the passive form in the past tense to describe what happened to his hopes."
    },
    {
        id: 95,
        question: "The king ______ struck with horror at the description I ______ given him of those terrible incidents",
        options: {
            A: "was/had",
            B: "is/was",
            C: "was/has",
            D: "were/had",
            E: "has/was"
        },
        answer: "A",
        explanation: "'was struck' – is past simple tense, It indicates that the action of being struck with horror happened in the past.'had given' – is the past perfect tense. It show that an action (giving the description) happened before another action in the past (the king being struck with horror)."
    },
    {
        id: 96,
        question: "He probably ________ be back in time for dinner.",
        options: {
            A: "Isn't",
            B: "Wasn't",
            C: "Won't",
            D: "Doesn't"
        },
        answer: "C",
        explanation: "'Won't' is the future negative form used here to indicate that he likely won't be back in time."
    },
    {
        id: 97,
        question: "'I need some money.' 'OK, ________How much do you need?'",
        options: {
            A: "I've lend you some.",
            B: "I'm lending you some.",
            C: "I've been lending you some.",
            D: "I'll lend you some."
        },
        answer: "D",
        explanation: "'I'll lend you some' is the correct spontaneous offer in the future form."
    },
    {
        id: 98,
        question: "They _____ their new car two weeks ago.",
        options: {
            A: "bought",
            B: "buy",
            C: "have bought",
            D: "will buy"
        },
        answer: "A",
        explanation: "'Bought' is the simple past tense, indicating an action completed two weeks ago."
    },
    {
        id: 99,
        question: "I ________ doing this work since Monday.",
        options: {
            A: "Was",
            B: "Have been",
            C: "Had been",
            D: "Will have been"
        },
        answer: "B",
        explanation: "'Have been' is the present perfect continuous tense to indicate an ongoing action from the past until the present."
    },
    {
        id: 100,
        question: "What______ if you press this button?",
        options: {
            A: "happens",
            B: "happened",
            C: "will happen",
            D: "have happened"
        },
        answer: "A",
        explanation: "'Happens' is in the present simple tense, used in conditional clauses to indicate what occurs as a result of pressing the button."
    }
];
