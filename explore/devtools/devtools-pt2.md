<ol>
<li> JS is loosely typed, so the inputs were being read as strings by default. This is why they were being concatenated instead of summed.
<li> The bug was fixed by forcing JS to parse the inputs as integers, so they would be summed and not concatenated.
</ol>