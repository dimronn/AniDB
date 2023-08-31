# AnimeDB API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `GET /getanime`
- `GET /getanimeById/:mal_id`
- `PATCH /member`
- `POST /tokenformember`
- `POST /bookmark/:animeId`
- `GET/bookmarks`




&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "username": "string(required)",
  "email": "string(required)",
  "password": "string(required)"
}
```

_Response (201 - Created)_

```json
{
  "message": "User with id <id> has been created",
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Username is required"
}
OR
{
  "message": "Password is required"
}
OR
{
  "message": "Email must be unique"
}
```

&nbsp;

## 2. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 3. GET /getanime

Description:
- Get all anime from third party API 
ur: "https://api.jikan.moe/v4/anime"

Request:

- query: 

```json
{
  "page": "integer",
  "genre": "string",
  "title": "string"

}
```

_Response (200 - OK)_

```json
[
  {
    "data": {
        "pagination": {
            "last_visible_page": 308,
            "has_next_page": true,
            "current_page": 1,
            "items": {
                "count": 25,
                "total": 7681,
                "per_page": 25
            }
        },
        "data": [
            {
                "mal_id": 16498,
                "url": "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/10/47347t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/10/47347l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/10/47347.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/10/47347t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/10/47347l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "LHtdKWJdif4",
                    "url": "https://www.youtube.com/watch?v=LHtdKWJdif4",
                    "embed_url": "https://www.youtube.com/embed/LHtdKWJdif4?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/LHtdKWJdif4/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/LHtdKWJdif4/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/LHtdKWJdif4/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/LHtdKWJdif4/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/LHtdKWJdif4/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyojin"
                    },
                    {
                        "type": "Synonym",
                        "title": "AoT"
                    },
                    {
                        "type": "Synonym",
                        "title": "SnK"
                    },
                    {
                        "type": "Japanese",
                        "title": "進撃の巨人"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan"
                    },
                    {
                        "type": "German",
                        "title": "Attack on Titan"
                    },
                    {
                        "type": "Spanish",
                        "title": "Ataque a los Titanes"
                    },
                    {
                        "type": "French",
                        "title": "L'Attaque des Titans"
                    }
                ],
                "title": "Shingeki no Kyojin",
                "title_english": "Attack on Titan",
                "title_japanese": "進撃の巨人",
                "title_synonyms": [
                    "AoT",
                    "SnK"
                ],
                "type": "TV",
                "source": "Manga",
                "episodes": 25,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2013-04-07T00:00:00+00:00",
                    "to": "2013-09-29T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 7,
                            "month": 4,
                            "year": 2013
                        },
                        "to": {
                            "day": 29,
                            "month": 9,
                            "year": 2013
                        }
                    },
                    "string": "Apr 7, 2013 to Sep 29, 2013"
                },
                "duration": "24 min per ep",
                "rating": "R - 17+ (violence & profanity)",
                "score": 8.54,
                "scored_by": 2693886,
                "rank": 111,
                "popularity": 1,
                "members": 3793404,
                "favorites": 165584,
                "synopsis": "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal Titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.\n\nAfter witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Eren, his adopted sister Mikasa Ackerman, and his childhood friend Armin Arlert join the brutal war against the Titans and race to discover a way of defeating them before the last walls are breached.\n\n[Written by MAL Rewrite]",
                "background": "Shingeki no Kyojin adapts content from the first eight volumes of Hajime Isayama's award-winning manga of the same name. The last episode received a pre-airing in Tokyo, Marunouchi Piccadilly 1 theater on Saturday, September 28, 2013. TV broadcast took place after midnight, a few hours later. Shingeki no Kyojin won the Animation of the Year in the Television category at the Tokyo Anime Award Festival in 2014.",
                "season": "spring",
                "year": 2013,
                "broadcast": {
                    "day": "Sundays",
                    "time": "01:58",
                    "timezone": "Asia/Tokyo",
                    "string": "Sundays at 01:58 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Production I.G",
                        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
                    },
                    {
                        "mal_id": 53,
                        "type": "anime",
                        "name": "Dentsu",
                        "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                    },
                    {
                        "mal_id": 143,
                        "type": "anime",
                        "name": "Mainichi Broadcasting System",
                        "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
                    },
                    {
                        "mal_id": 144,
                        "type": "anime",
                        "name": "Pony Canyon",
                        "url": "https://myanimelist.net/anime/producer/144/Pony_Canyon"
                    },
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 430,
                        "type": "anime",
                        "name": "Mad Box",
                        "url": "https://myanimelist.net/anime/producer/430/Mad_Box"
                    },
                    {
                        "mal_id": 1557,
                        "type": "anime",
                        "name": "Pony Canyon Enterprise",
                        "url": "https://myanimelist.net/anime/producer/1557/Pony_Canyon_Enterprise"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 858,
                        "type": "anime",
                        "name": "Wit Studio",
                        "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 46,
                        "type": "anime",
                        "name": "Award Winning",
                        "url": "https://myanimelist.net/anime/genre/46/Award_Winning"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 41,
                        "type": "anime",
                        "name": "Suspense",
                        "url": "https://myanimelist.net/anime/genre/41/Suspense"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 58,
                        "type": "anime",
                        "name": "Gore",
                        "url": "https://myanimelist.net/anime/genre/58/Gore"
                    },
                    {
                        "mal_id": 38,
                        "type": "anime",
                        "name": "Military",
                        "url": "https://myanimelist.net/anime/genre/38/Military"
                    },
                    {
                        "mal_id": 76,
                        "type": "anime",
                        "name": "Survival",
                        "url": "https://myanimelist.net/anime/genre/76/Survival"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
    }
  }
  
  ...,
]
```

&nbsp;

## 4. GET /getanimeById/:mal_id

Description:
- Get Anime from third party API with mal_id
url:`https://api.jikan.moe/v4/anime/${mal_id}`

Request:

- params:

```json
{
  "mal_id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  {
    "data": {
        "data": {
            "mal_id": 5114,
            "url": "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1208/94745.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1208/94745t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1208/94745l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1208/94745.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1208/94745t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1208/94745l.webp"
                }
            },
            "trailer": {
                "youtube_id": "--IcmZkvL0Q",
                "url": "https://www.youtube.com/watch?v=--IcmZkvL0Q",
                "embed_url": "https://www.youtube.com/embed/--IcmZkvL0Q?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/--IcmZkvL0Q/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/--IcmZkvL0Q/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/--IcmZkvL0Q/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/--IcmZkvL0Q/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/--IcmZkvL0Q/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Fullmetal Alchemist: Brotherhood"
                },
                {
                    "type": "Synonym",
                    "title": "Hagane no Renkinjutsushi: Fullmetal Alchemist"
                },
                {
                    "type": "Synonym",
                    "title": "Fullmetal Alchemist (2009)"
                },
                {
                    "type": "Synonym",
                    "title": "FMA"
                },
                {
                    "type": "Synonym",
                    "title": "FMAB"
                },
                {
                    "type": "Japanese",
                    "title": "鋼の錬金術師 FULLMETAL ALCHEMIST"
                },
                {
                    "type": "English",
                    "title": "Fullmetal Alchemist: Brotherhood"
                },
                {
                    "type": "French",
                    "title": "Fullmetal Alchemist Brotherhood"
                }
            ],
            "title": "Fullmetal Alchemist: Brotherhood",
            "title_english": "Fullmetal Alchemist: Brotherhood",
            "title_japanese": "鋼の錬金術師 FULLMETAL ALCHEMIST",
            "title_synonyms": [
                "Hagane no Renkinjutsushi: Fullmetal Alchemist",
                "Fullmetal Alchemist (2009)",
                "FMA",
                "FMAB"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 64,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2009-04-05T00:00:00+00:00",
                "to": "2010-07-04T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 5,
                        "month": 4,
                        "year": 2009
                    },
                    "to": {
                        "day": 4,
                        "month": 7,
                        "year": 2010
                    }
                },
                "string": "Apr 5, 2009 to Jul 4, 2010"
            },
            "duration": "24 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 9.1,
            "scored_by": 2043523,
            "rank": 1,
            "popularity": 3,
            "members": 3217757,
            "favorites": 219602,
            "synopsis": "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor.\n\nThe brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing \"automail,\" a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.\n\nAs Edward becomes an infamous alchemist and gains the nickname \"Fullmetal,\" the boys' journey embroils them in a growing conspiracy that threatens the fate of the world.\n\n[Written by MAL Rewrite]",
            "background": null,
            "season": "spring",
            "year": 2009,
            "broadcast": {
                "day": "Sundays",
                "time": "17:00",
                "timezone": "Asia/Tokyo",
                "string": "Sundays at 17:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https://myanimelist.net/anime/producer/17/Aniplex"
                },
                {
                    "mal_id": 58,
                    "type": "anime",
                    "name": "Square Enix",
                    "url": "https://myanimelist.net/anime/producer/58/Square_Enix"
                },
                {
                    "mal_id": 143,
                    "type": "anime",
                    "name": "Mainichi Broadcasting System",
                    "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
                },
                {
                    "mal_id": 1155,
                    "type": "anime",
                    "name": "Studio Moriken",
                    "url": "https://myanimelist.net/anime/producer/1155/Studio_Moriken"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https://myanimelist.net/anime/producer/102/Funimation"
                },
                {
                    "mal_id": 493,
                    "type": "anime",
                    "name": "Aniplex of America",
                    "url": "https://myanimelist.net/anime/producer/493/Aniplex_of_America"
                }
            ],
            "studios": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Bones",
                    "url": "https://myanimelist.net/anime/producer/4/Bones"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https://myanimelist.net/anime/genre/8/Drama"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 38,
                    "type": "anime",
                    "name": "Military",
                    "url": "https://myanimelist.net/anime/genre/38/Military"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        }
    }
}
}
```

_Response (404 - Not Found)_



&nbsp;

## 5. PATCH /member

Request:

- headers:

```json
{
  "access_token": "string"
}
```
- user
```json
{
  "id": "integer(required)"
}
```


_Response (201 - OK)_

```json
{
  "message": "You have become a member"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Not Found"
}

```


&nbsp;

## 6. POST /tokenformember

Request:

- headers:

```json
{
  "access_token": "string"
}
```
- user
```json
{
  "id": "integer(required)"
}
```


_Response (201 - Created)_

```json
{
  "token": "string",
  "redirect_url": "string"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Not Found"
}

```



&nbsp;

## 6. POST /bookmark/:animeId

Request:

- headers:

```json
{
  "access_token": "string"
}
```
- user
```json
{
  "id": "integer(required)"
}
```
- params
```json
{
  "animeId": "integer(required)"
}
```


_Response (201 - OK)_

```json
{
  "message": "Anime with MAL ID ${animeId} sucessfully bookmarked"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Not Found"
}

```
## 7. GET /bookmarks

Request:

- headers:

```json
{
  "access_token": "string"
}
```
- user
```json
{
  "id": "integer(required)"
}
```



_Response (200 - OK)_

```json
{
  "bookmarks":"array of object"
}
```

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```