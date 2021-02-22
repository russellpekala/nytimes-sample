# nytimes-sample
Some quick and dirty data analysis.  Built to check word frequencies with [NYTimes Article Search API](https://developer.nytimes.com/docs/articlesearch-product/1/overview).  For my own purposes, I processed some of this into an HTML page that I am hosting using [capsule](https://capsule.click/playback/1613952515186).  

## About

This is totally a tiny personal project.  I was interested in how different search words showed up in the news over time.  I used the article search API to get ten sample articles from every complete available year (1851-2020) that matched the search words.  Since I didn't want to deal with pagination, I just got ten articles for each year for each term.  Due to NYTimes rate limits (10 requests/minute by default), running this will take on the order of several hours depending on how many search terms you are interested in, BigO(number of search words).  The four words that I wanted to look at were "technology", "science", "politics", and "Minneapolis".  

## How To

Steps
* Sign up for NYTimes API at developer.nytimes.com. 
* edit `count_freq_by_year.js` to include the words you want to search for articles about and your API Key.
* Run this with `node count_freq_by_year`
* you should now have a data directory with a bunch of raw api responses.  
* See the `WORD FREQ`.ipynb notebook for processing these responses.  The processing script runs really fast and produces the html file.


