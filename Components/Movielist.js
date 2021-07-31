const movielist = [
    {
      title: 'CAPTAIN AMERICA: THE FIRST AVENGER',
      avatar_url: 'https://resizing.flixster.com/MAR1J1iyO-tr5BsI5Loqli3ioQo=/173x270/v1.bTsxMTE1ODMzOTtqOzE4OTQzOzIwNDg7MTc0NTsyNzI0',
      year: '2011',
     directed: 'Joe Johnston',
    display: 'true'
    },
    {
      title: 'CAPTAIN MARVEL',
      avatar_url: 'https://resizing.flixster.com/Mdm9SRZsAK0urSKP2WfU7Gi-owM=/180x267/v1.bTsxMjkyNjcxNjtqOzE4ODg1OzIwNDg7MTY4ODsyNTAw',
      year: '2019',
     directed: 'Anna Boden, Ryan Fleck',
    display: 'true'
      
    },
    {
      title: 'IRON MAN',
      avatar_url: 'https://resizing.flixster.com/Klw0RnLIKE9QEZVoOtUrh_7bOZQ=/180x270/v1.bTsxMTIxODE4OTtqOzE4OTQzOzIwNDg7MTAwMDsxNTAw',
      year: '2008',
     directed: ' Robert Downey Jr., Terrence Howard, Jeff Bridges, Gwyneth Paltrow',
    display: 'true'
    },
  
    {
      title: 'IRON MAN 2',
      avatar_url: 'https://resizing.flixster.com/SyjEgYHm35IgLXXJHbfsCZY2S6g=/180x240/v1.bTsxMTIzNjc1ODtqOzE4OTczOzIwNDg7MTUzNjsyMDQ4',
      year: '2010',
     directed: ' Robert Downey Jr., Gwyneth Paltrow, Don Cheadle, Mickey Rourke',
    display: 'true'
      
    },
  
    {
      title: 'THE INCREDIBLE HULK',
      avatar_url: 'https://resizing.flixster.com/EpW5Ef35jW1OjEJEyJfQCR0qdTw=/180x270/v1.bTsxMTE3MDc2NDtqOzE4OTQ4OzIwNDg7ODAwOzEyMDA',
      year: '2008',
      directed: ' Louis Leterrier',
      display: 'true'
    },
  
    {
      title: 'THOR',
      avatar_url: 'https://resizing.flixster.com/sX9eGaqOuaqddKNcFnFoEpGFAPs=/180x240/v1.bTsxMTMxMTY2NztqOzE4OTU3OzIwNDg7MTAxMDsxMzQ2',
      year: '2011',
      directed: 'Kenneth Branagh',
      display: 'true'
    },
  
    {
      title: 'THE AVENGERS',
      avatar_url: 'https://resizing.flixster.com/117gs7wz1Aoj32D-WqYscgEOFQ8=/180x240/v1.bTsxMTIzMTk5MztqOzE4OTc3OzIwNDg7OTAwOzEyMDA',
      year: '2012',
     directed: 'Joss Whedon',
    display: 'true'
    },
    {
        title: 'THOR: THE DARK WORLD',
        avatar_url:'https://resizing.flixster.com/4SRfLZnCVDKBB1kIRDYU2CU91ds=/180x240/v1.bTsxMjM1Mjg2ODtqOzE4ODcwOzIwNDg7MTUzNjsyMDQ4',
        year: '2013',
        directed: ' Alan Taylor',
        display: 'true'
    },
    {
        title: 'IRON MAN 3',
        avatar_url:'https://resizing.flixster.com/mRse1LD0uAEaYJkRf_kNFJBtAMY=/180x257/v1.bTsxMTE3MDU5NDtqOzE4OTU4OzIwNDg7Mjg0OzQwNQ',
        year: '2013',
        directed: 'Shane Black',
        display: 'true'
    },
    {
        title: 'CAPTAIN AMERICA: THE WINTER SOLDIER',
        avatar_url:'https://resizing.flixster.com/ObOPv0vLbQETZZknN9zsC8DqmgQ=/180x267/v1.bTsxMTE3NzI0NjtqOzE4OTUwOzIwNDg7NDA1OzYwMA',
        year: '2014',
        directed: 'Joe Russo, Anthony Russo',
        display: 'true'
    },
    {
        title: 'GUARDIANS OF THE GALAXY',
        avatar_url:'https://resizing.flixster.com/SOsFvioXttI_7Ns26Y79tZMg1w8=/180x267/v1.bTsxMTE3ODA4MjtqOzE4OTc2OzIwNDg7MTY4ODsyNTAw',
        year: '2014',
        directed: 'James Gunn (II)',
        display: 'true'
    },
    {
        title: 'GUARDIANS OF THE GALAXY VOL. 2',
        avatar_url:'https://resizing.flixster.com/rfa8mitpQm9-qDgSulnthJ16Ykc=/180x267/v1.bTsxMjMyMzE1NjtwOzE4OTAzOzIwNDg7NTkxOzg3Ng',
        year: '2017',
        directed: 'James Gunn (II)',
        display: 'true'
    },
    {
        title: 'AVENGERS: AGE OF ULTRON',
        avatar_url:'https://resizing.flixster.com/zTkzJMXXpqwLgwsHYCsHQ9nJDx0=/180x270/v1.bTsxMTE5MDE0MztqOzE4OTc3OzIwNDg7MTA0NzsxNTcy',
        year: '2015',
        directed: 'Joss Whedon',
        display: 'true'
    },
    {
        title: 'ANT-MAN',
        avatar_url:'https://resizing.flixster.com/3GqfeI8oSNULg3pLzJbSmOb6_AU=/180x270/v1.bTsxMzE1NTIzODtqOzE4OTAwOzIwNDg7MTY2NjsyNDk5',
        year: '2015',
        directed: 'Peyton Reed',
        display: 'true'
    },
    {
        title: 'CAPTAIN AMERICA: CIVIL WAR',
        avatar_url:'https://resizing.flixster.com/d8IxhnjdnV5unVRJfNjnp5AsNp8=/180x266/v1.bTsxMTY5MDA3MDtwOzE4ODcwOzIwNDg7NDg4OzcyMA',
        year: '2016',
        directed: 'Anthony Russo',
        display: 'true'
    },
    {
        title: 'BLACK WIDOW ',
        avatar_url:'https://resizing.flixster.com/qh5zp-QcKBaCLIvo0Ws03iKjty4=/180x267/v1.bTsxMzg1MjA2NDtqOzE4OTA5OzIwNDg7MTY4ODsyNTAw',
        year: '2021',
        directed: ' Cate Shortland',
        display: 'true'
    },
    {
        title: 'SPIDER-MAN: HOMECOMING',
        avatar_url:'https://resizing.flixster.com/_x0gKQODSVgvOjQ9Wru4K_toW3A=/180x267/v1.bTsxMjQxNTA2NTtqOzE4ODc4OzIwNDg7Mzc4OzU2MA',
        year: '2017',
        directed: 'Jon Watts',
        display: 'true'
    },
    {
        title: 'BLACK PANTHER',
        avatar_url:'https://resizing.flixster.com/g3GPsnaJ1JPC9ra5jzNT-st-pLo=/180x267/v1.bTsxMjU1NzcyNTtqOzE4ODkwOzIwNDg7MTY4ODsyNTAw',
        year: '2018',
        directed: 'Ryan Coogler',
        display: 'true'
    },
    {
        title: 'DOCTOR STRANGE',
        avatar_url:'https://resizing.flixster.com/pNKz85ZBIiSpb5mDzDgkwtnTvF0=/180x268/v1.bTsxMjE3OTkzMTtqOzE4ODY2OzIwNDg7Mzg3OzU3Ng',
        year: '2016',
        directed: 'Scott Derrickson, Patrick Archibald, Jay Oliva, Frank Paur',
        display: 'true'
    },
    {
        title: 'THOR: RAGNAROK',
        avatar_url:'https://resizing.flixster.com/tGenlbud6C0DwvWABovkFAlIgtI=/180x267/v1.bTsxMjQ2NDczNjtqOzE4ODcwOzIwNDg7MTY4ODsyNTAw',
        year: '2017',
        directed: 'Taika Waititi',
        display: 'true'
    },
    {
        title: 'AVENGERS: INFINITY WAR',
        avatar_url:'https://resizing.flixster.com/HGtAAUCEqvlf7oxK6-WvZPswt1I=/180x267/v1.bTsxMjcwMDQ5MztqOzE4ODc0OzIwNDg7MTY4ODsyNTAw',
        year: '2018',
        directed: 'Anthony Russo',
        display: 'true'
    },
    {
        title: 'AVENGERS: ENDGAME',
        avatar_url:'https://resizing.flixster.com/1vPW8TeOIbOKhZT4-ixgKDtAoNM=/180x267/v1.bTsxMzAxOTkzMjtqOzE4OTA3OzIwNDg7MTY4ODsyNTAw',
        year: '2019',
        directed: 'Anthony Russo',
        display: 'true'
    },
    {
        title: 'ANT-MAN AND THE WASP',
        avatar_url:'https://resizing.flixster.com/K6NnmU7f3VbV44M6l1b1hmWIx_c=/180x225/v1.bTsxMjcyOTQxMjtqOzE4OTA0OzIwNDg7MTYzODsyMDQ4',
        year: '2018',
        directed: 'Peyton Reed',
        display: 'true'
    },
    {
        title: 'SPIDER-MAN: FAR FROM HOME',
        avatar_url:'https://resizing.flixster.com/Az1Mnqi-6TtVJcpcRlxgVpiuk50=/180x267/v1.bTsxMzA0NjcwMjtqOzE4OTAzOzIwNDg7NjA3Mjs5MDAw',
        year: '2019',
        directed: 'Jon Watts',
        display: 'true'
    }
   
  ]

  export default movielist;