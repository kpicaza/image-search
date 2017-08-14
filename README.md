Image Search Abstraction Layer
==============================

## User stories:
* **User Story 1:** I can get the image URLs, alt text and page urls for a set of images relating to a given search string.

* **User Story 2:** I can paginate through the responses by adding a ?offset=2 parameter to the URL..

* **User Story 3:** I can get a list of the most recently submitted search strings.

## Usage
### Make search:

params |	type	| description
-------|------------|------------
query  |	string	| Query to make search
offset |	number	| Number of items to ignore before first result,

````
curl -X GET \
  'http://localhost:4200/api/images?query=cats&offset=11'
````
#### Response

````
[
    {
        "url": "https://media1.popsugar-assets.com/files/thumbor/ALaiIjt9_aXqNhhlToI1EDSaWv4/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2016/09/28/959/n/1922243/499d595c_edit_img_image_14690959_1475099788/i/Blind-Cat-Picks-His-Own-Cat-Friend.png",
        "snippet": "Take Your Cat on an Adventure Day | Video | POPSUGAR Pets",
        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvW24pzXkt_zCyZdGxEe7F0Jw7HaM969tWlrQX_82zUUkq2TjFbhACZnjj",
        "context": "https://www.popsugar.com/pets/Take-Your-Cat-Adventure-Day-Video-41633065"
    },
    ...
]
````

#### Get recent searches:

````
curl -X GET \
  'http://localhost:4200/api/recent-searches'
````
#### Response

````
[
    {
        "query": "nwa",
        "offset": "1",
        "ocurred_on": "2017-08-14T01:38:46.622Z"
    },
    {
        "query": "the childs and the hood",
        "offset": "1",
        "ocurred_on": "2017-08-14T01:38:14.739Z"
    },
    ...
]
````
