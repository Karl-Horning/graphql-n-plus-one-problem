# graphql-n-plus-one-problem

An example of the GraphQL N + 1 problem:

This request:

```json
query GetAllAuthors {
  getAllAuthors {
    id
    name
    birthDate
    deathDate
    bio
    works {
      title
      year
    }
  }
}
```

Provides this response:

```
{
  "data": {
    "getAllAuthors": [
      {
        "id": 1,
        "name": "Jane Austen",
        "birthDate": "-6123427200000",
        "deathDate": "-4811097600000",
        "bio": "Jane Austen was a Georgian and Regency-era novelist born on 16 December 1775 and died on 18 July 1817. Known for her wit and keen observations, Austen's novels explore the relationships and manners of the English landed gentry in the early 19th century.",
        "works": [
          {
            "title": "Sense and Sensibility",
            "year": "1811"
          },
          {
            "title": "Pride and Prejudice",
            "year": "1813"
          },
          {
            "title": "Mansfield Park",
            "year": "1814"
          },
          {
            "title": "Emma",
            "year": "1815"
          },
          {
            "title": "Northanger Abbey",
            "year": "1818"
          },
          {
            "title": "Persuasion",
            "year": "1818"
          }
        ]
      },
      {
        "id": 2,
        "name": "Charlotte Brontë",
        "birthDate": "-4850236800000",
        "deathDate": "-3621369600000",
        "bio": "Charlotte Brontë was a Victorian novelist born on 21 April 1816 and died on 31 March 1855. She is best known for her novel 'Jane Eyre,' which remains a classic of English literature.",
        "works": [
          {
            "title": "Jane Eyre",
            "year": "1847"
          },
          {
            "title": "Shirley",
            "year": "1849"
          },
          {
            "title": "Villette",
            "year": "1853"
          }
        ]
      },
      {
        "id": 3,
        "name": "Anne Brontë",
        "birthDate": "-4732214400000",
        "deathDate": "-3805660800000",
        "bio": "Anne Brontë was a Victorian novelist born on 17 January 1820 and died on 28 May 1849. She is known for her novels 'Agnes Grey' and 'The Tenant of Wildfell Hall.'",
        "works": [
          {
            "title": "Agnes Grey",
            "year": "1847"
          },
          {
            "title": "The Tenant of Wildfell Hall",
            "year": "1848"
          }
        ]
      },
      {
        "id": 4,
        "name": "Charles Dickens",
        "birthDate": "-4982860800000",
        "deathDate": "-3141936000000",
        "bio": "Charles Dickens was a Victorian novelist born on 7 February 1812 and died on 9 June 1870. Dickens is one of the most celebrated and prolific authors of the 19th century. His novels, known for their vivid characters and social commentary, reflect the realities of Victorian society. Some of his most famous works include 'A Tale of Two Cities,' 'Great Expectations,' and 'A Christmas Carol.'",
        "works": [
          {
            "title": "The Pickwick Papers",
            "year": "1837"
          },
          {
            "title": "Oliver Twist",
            "year": "1837-1839"
          },
          {
            "title": "Nicholas Nickleby",
            "year": "1838-1839"
          },
          {
            "title": "A Christmas Carol",
            "year": "1843"
          },
          {
            "title": "David Copperfield",
            "year": "1849-1850"
          },
          {
            "title": "Bleak House",
            "year": "1852-1853"
          },
          {
            "title": "A Tale of Two Cities",
            "year": "1859"
          },
          {
            "title": "Great Expectations",
            "year": "1860-1861"
          }
        ]
      },
      {
        "id": 5,
        "name": "George Eliot",
        "birthDate": "-4737052800000",
        "deathDate": "-2809382400000",
        "bio": "George Eliot (Mary Ann Evans) was a prominent Victorian novelist born on 22 November 1819 and died on 22 December 1880. Her novels often explore complex characters, psychological insight, and societal issues of her time. 'Middlemarch' is considered one of her masterpieces.",
        "works": [
          {
            "title": "Adam Bede",
            "year": "1859"
          },
          {
            "title": "The Mill on the Floss",
            "year": "1860"
          },
          {
            "title": "Silas Marner",
            "year": "1861"
          },
          {
            "title": "Romola",
            "year": "1862-1863"
          },
          {
            "title": "Felix Holt, the Radical",
            "year": "1866"
          },
          {
            "title": "Middlemarch",
            "year": "1871-1872"
          }
        ]
      },
      {
        "id": 6,
        "name": "Thomas Hardy",
        "birthDate": "-4089225600000",
        "deathDate": "-1324598400000",
        "bio": "Thomas Hardy was a Victorian novelist born on 2 June 1840 and died on 11 January 1928. He is known for his novels that explore rural life, social issues, and the complexities of human relationships in Victorian England.",
        "works": [
          {
            "title": "Desperate Remedies",
            "year": "1871"
          },
          {
            "title": "Under the Greenwood Tree",
            "year": "1872"
          },
          {
            "title": "A Pair of Blue Eyes",
            "year": "1873"
          },
          {
            "title": "Far from the Madding Crowd",
            "year": "1874"
          },
          {
            "title": "The Return of the Native",
            "year": "1878"
          },
          {
            "title": "Tess of the d'Urbervilles",
            "year": "1891"
          },
          {
            "title": "Jude the Obscure",
            "year": "1895"
          }
        ]
      },
      {
        "id": 7,
        "name": "Edgar Allan Poe",
        "birthDate": "-5079110400000",
        "deathDate": "-3794256000000",
        "bio": "Edgar Allan Poe was an American writer born on 19 January 1809 and died on 7 October 1849. He is known for his dark and macabre tales. His works often explore themes of madness, death, and the macabre, and he is considered a master of the short story and poetry in the Gothic tradition. 'The Raven' is one of his most famous poems, and 'The Tell-Tale Heart' and 'The Fall of the House of Usher' are among his well-known short stories.",
        "works": [
          {
            "title": "The Tell-Tale Heart",
            "year": "1843"
          },
          {
            "title": "The Fall of the House of Usher",
            "year": "1839"
          },
          {
            "title": "The Murders in the Rue Morgue",
            "year": "1841"
          },
          {
            "title": "The Masque of the Red Death",
            "year": "1842"
          },
          {
            "title": "The Pit and the Pendulum",
            "year": "1842"
          },
          {
            "title": "The Raven",
            "year": "1845"
          },
          {
            "title": "The Cask of Amontillado",
            "year": "1846"
          },
          {
            "title": "Annabel Lee",
            "year": "1849"
          }
        ]
      },
      {
        "id": 8,
        "name": "Mark Twain",
        "birthDate": "-4231440000000",
        "deathDate": "-1883952000000",
        "bio": "Mark Twain (Samuel Clemens) was an American writer born on 30 November 1835 and died on 21 April 1910. He is known for his humour, social commentary, and iconic works such as 'The Adventures of Tom Sawyer' and 'Adventures of Huckleberry Finn.'",
        "works": [
          {
            "title": "The Celebrated Jumping Frog of Calaveras County",
            "year": "1865"
          },
          {
            "title": "The Innocents Abroad",
            "year": "1869"
          },
          {
            "title": "The Adventures of Tom Sawyer",
            "year": "1876"
          },
          {
            "title": "The Prince and the Pauper",
            "year": "1881"
          },
          {
            "title": "Adventures of Huckleberry Finn",
            "year": "1884"
          },
          {
            "title": "A Connecticut Yankee in King Arthur's Court",
            "year": "1889"
          }
        ]
      },
      {
        "id": 9,
        "name": "Emily Brontë",
        "birthDate": "-4778524800000",
        "deathDate": "-3819484800000",
        "bio": "Emily Brontë was a Victorian novelist born on 30 July 1818 and died on 19 December 1848. She is best known for her only novel, 'Wuthering Heights,' which is considered a classic of English literature.",
        "works": [
          {
            "title": "Wuthering Heights",
            "year": "1847"
          }
        ]
      },
      {
        "id": 10,
        "name": "Oscar Wilde",
        "birthDate": "-3635712000000",
        "deathDate": "-2180217600000",
        "bio": "Oscar Wilde was an Irish playwright, poet, and author born on 16 October 1854 and died on 30 November 1900. Wilde is known for his wit, satirical plays, and flamboyant style. 'The Picture of Dorian Gray' is his only novel and remains one of his most famous and enduring works. 'The Importance of Being Earnest' is considered one of the greatest comedies in the English language.",
        "works": [
          {
            "title": "The Picture of Dorian Gray",
            "year": "1890"
          },
          {
            "title": "The Happy Prince and Other Tales",
            "year": "1888"
          },
          {
            "title": "De Profundis",
            "year": "1905"
          },
          {
            "title": "The Importance of Being Earnest",
            "year": "1895"
          },
          {
            "title": "Salomé",
            "year": "published in 1893, performed in 1896"
          }
        ]
      }
    ]
  }
}
```

Which is generated by these queries, 10 of which are identical:

```
prisma:query SELECT `main`.`Author`.`id`, `main`.`Author`.`name`, `main`.`Author`.`birthDate`, `main`.`Author`.`deathDate`, `main`.`Author`.`bio` FROM `main`.`Author` WHERE 1=1 LIMIT ? OFFSET ?
prisma:query SELECT `main`.`Work`.`id`, `main`.`Work`.`title`, `main`.`Work`.`year`, `main`.`Work`.`notes`, `main`.`Work`.`authorId` FROM `main`.`Work` WHERE `main`.`Work`.`authorId` = ? LIMIT ? OFFSET ?
prisma:query SELECT `main`.`Work`.`id`, `main`.`Work`.`title`, `main`.`Work`.`year`, `main`.`Work`.`notes`, `main`.`Work`.`authorId` FROM `main`.`Work` WHERE `main`.`Work`.`authorId` = ? LIMIT ? OFFSET ?
prisma:query SELECT `main`.`Work`.`id`, `main`.`Work`.`title`, `main`.`Work`.`year`, `main`.`Work`.`notes`, `main`.`Work`.`authorId` FROM `main`.`Work` WHERE `main`.`Work`.`authorId` = ? LIMIT ? OFFSET ?
prisma:query SELECT `main`.`Work`.`id`, `main`.`Work`.`title`, `main`.`Work`.`year`, `main`.`Work`.`notes`, `main`.`Work`.`authorId` FROM `main`.`Work` WHERE `main`.`Work`.`authorId` = ? LIMIT ? OFFSET ?
prisma:query SELECT `main`.`Work`.`id`, `main`.`Work`.`title`, `main`.`Work`.`year`, `main`.`Work`.`notes`, `main`.`Work`.`authorId` FROM `main`.`Work` WHERE `main`.`Work`.`authorId` = ? LIMIT ? OFFSET ?
prisma:query SELECT `main`.`Work`.`id`, `main`.`Work`.`title`, `main`.`Work`.`year`, `main`.`Work`.`notes`, `main`.`Work`.`authorId` FROM `main`.`Work` WHERE `main`.`Work`.`authorId` = ? LIMIT ? OFFSET ?
prisma:query SELECT `main`.`Work`.`id`, `main`.`Work`.`title`, `main`.`Work`.`year`, `main`.`Work`.`notes`, `main`.`Work`.`authorId` FROM `main`.`Work` WHERE `main`.`Work`.`authorId` = ? LIMIT ? OFFSET ?
prisma:query SELECT `main`.`Work`.`id`, `main`.`Work`.`title`, `main`.`Work`.`year`, `main`.`Work`.`notes`, `main`.`Work`.`authorId` FROM `main`.`Work` WHERE `main`.`Work`.`authorId` = ? LIMIT ? OFFSET ?
prisma:query SELECT `main`.`Work`.`id`, `main`.`Work`.`title`, `main`.`Work`.`year`, `main`.`Work`.`notes`, `main`.`Work`.`authorId` FROM `main`.`Work` WHERE `main`.`Work`.`authorId` = ? LIMIT ? OFFSET ?
prisma:query SELECT `main`.`Work`.`id`, `main`.`Work`.`title`, `main`.`Work`.`year`, `main`.`Work`.`notes`, `main`.`Work`.`authorId` FROM `main`.`Work` WHERE `main`.`Work`.`authorId` = ? LIMIT ? OFFSET ?
```

## References

From all of the references, the video [DataLoader and the Problem it solves in GraphQL](https://youtu.be/ld2_AS4l19g) helped me to understand the problem and solutions the most. It also provided a great example. The other resources work well to give additional materiel and different perspectives.

### Library

- [GraphQL DataLoader](https://github.com/graphql/dataloader)

### Articles

- [Handling the N+1 problem](https://www.apollographql.com/docs/federation/entities-advanced/#handling-the-n1-problem)
- [How to solve the GraphQL n+1 problem](https://hygraph.com/blog/graphql-n-1-problem)
- [Solving the N+1 Problem for GraphQL through Batching](https://shopify.engineering/solving-the-n-1-problem-for-graphql-through-batching)
- [Using DataLoader in GraphQL](https://oliha.dev/articles/using-dataloader-in-graphql/)
- [How to Avoid the N+1 Query Problem in GraphQL and REST APIs [with Benchmarks]](https://www.freecodecamp.org/news/n-plus-one-query-problem/)
- [How Federation handles the N+1 query problem](https://www.apollographql.com/docs/technotes/TN0019-federation-n-plus-1/)

### Videos

- [DataLoader and the Problem it solves in GraphQL](https://youtu.be/ld2_AS4l19g)
- [Batching GraphQL Requests with DataLoader](https://youtu.be/-uSDpEp5uJc)