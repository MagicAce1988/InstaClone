const getUserStories = userId => {
  const userStories = [
    {
      user: {
        id: 1,
        name: 'Adelina',
        profilePic:
          'https://oceandrive.com/get/files/image/galleries/B6553.jpg',
      },
      stories: [
        {
          imageUri:
            'https://oceandrive.com/get/files/image/galleries/B6553.jpg',
          postedTime: '25m',
        },
        {
          imageUri:
            'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
          postedTime: '32m',
        },
      ],
    },
    {
      user: {
        id: 2,
        name: 'Beatrice',
        profilePic:
          'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
      },
      stories: [
        {
          imageUri:
            'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
          postedTime: '25m',
        },
      ],
    },
    {
      user: {
        id: 3,
        name: 'Roberta',
        profilePic:
          'https://media.istockphoto.com/photos/brown-eyed-woman-is-looking-tenderly-at-viewer-make-up-hairdressing-picture-id1280410981?b=1&k=20&m=1280410981&s=170667a&w=0&h=Q8wh4aBkJ1eBwKHIE0Mhszc8MVdrMxCweQdPr3ijnHI=',
      },
      stories: [
        {
          imageUri:
            'https://oceandrive.com/get/files/image/galleries/B6553.jpg',
          postedTime: '25m',
        },
        {
          imageUri:
            'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
          postedTime: '32m',
        },
      ],
    },
    {
      user: {
        id: 4,
        name: 'Adelina',
        profilePic:
          'https://oceandrive.com/get/files/image/galleries/B6553.jpg',
      },
      stories: [
        {
          imageUri:
            'https://oceandrive.com/get/files/image/galleries/B6553.jpg',
          postedTime: '25m',
        },
        {
          imageUri:
            'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
          postedTime: '32m',
        },
      ],
    },
    {
      user: {
        id: 5,
        name: 'Beatrice',
        profilePic:
          'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
      },
      stories: [
        {
          imageUri:
            'https://oceandrive.com/get/files/image/galleries/B6553.jpg',
          postedTime: '25m',
        },
        {
          imageUri:
            'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
          postedTime: '32m',
        },
      ],
    },
    {
      user: {
        id: 6,
        name: 'Roberta',
        profilePic:
          'https://media.istockphoto.com/photos/brown-eyed-woman-is-looking-tenderly-at-viewer-make-up-hairdressing-picture-id1280410981?b=1&k=20&m=1280410981&s=170667a&w=0&h=Q8wh4aBkJ1eBwKHIE0Mhszc8MVdrMxCweQdPr3ijnHI=',
      },
      stories: [
        {
          imageUri:
            'https://oceandrive.com/get/files/image/galleries/B6553.jpg',
          postedTime: '25m',
        },
        {
          imageUri:
            'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
          postedTime: '32m',
        },
      ],
    },
    {
      user: {
        id: 7,
        name: 'Adelina',
        profilePic:
          'https://oceandrive.com/get/files/image/galleries/B6553.jpg',
      },
      stories: [
        {
          imageUri:
            'https://oceandrive.com/get/files/image/galleries/B6553.jpg',
          postedTime: '25m',
        },
        {
          imageUri:
            'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
          postedTime: '32m',
        },
      ],
    },
    {
      user: {
        id: 8,
        name: 'Beatrice',
        profilePic:
          'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
      },
      stories: [
        {
          imageUri:
            'https://oceandrive.com/get/files/image/galleries/B6553.jpg',
          postedTime: '25m',
        },
        {
          imageUri:
            'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
          postedTime: '32m',
        },
      ],
    },
    {
      user: {
        id: 9,
        name: 'Roberta',
        profilePic:
          'https://media.istockphoto.com/photos/brown-eyed-woman-is-looking-tenderly-at-viewer-make-up-hairdressing-picture-id1280410981?b=1&k=20&m=1280410981&s=170667a&w=0&h=Q8wh4aBkJ1eBwKHIE0Mhszc8MVdrMxCweQdPr3ijnHI=',
      },
      stories: [
        {
          imageUri:
            'https://oceandrive.com/get/files/image/galleries/B6553.jpg',
          postedTime: '25m',
        },
        {
          imageUri:
            'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
          postedTime: '32m',
        },
      ],
    },
  ];

  const userStory = userStories.find(story => story.user.id === userId);

  return userId ? userStory : userStories;
};

export default getUserStories;
