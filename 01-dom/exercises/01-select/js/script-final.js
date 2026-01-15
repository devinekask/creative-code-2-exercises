const init = () => {
  // Question 1: select one element that has a class subtitle.
  // Also check the type of the result using typeof
  /*
        Solution: use querySelector to get exact one element
        Even when the element occurs multiple times in the document, quyerSelector will only return the first occurence.
        A single HTML element has the type Object in JavaScript
    */

  const $subtitle = document.querySelector(`.subtitle`);
  console.log($subtitle);
  console.log(typeof $subtitle);

  // Question 2: select all elements that have a class subtitle.
  // Also check the type of the result
  /*
        Solution: A NodeList is returned, even if the element occurs only once in the document. In that case, the NodeList will only hold one element
        A NodeList is also an Object in JavaScript
    */
  const $subtitles = document.querySelectorAll(`.subtitle`);
  console.log($subtitles);
  console.log(typeof $subtitles);

  // Question 3: select for each episode the span element that contains the title
  /*
        Solution: you can use querySelectorAll to select all the elements that match a selector
    */
  const $titles = document.querySelectorAll(`.episode__title`);
  console.log($titles);

  // Question 4: Select the text AIRS SUNDAYS 9/8C without changing the structure of the document
  /*
        Solution: you can select an element within another element, just like you do in CSS
        the property textContent contains the actual text of the element, this is of the type string
    */
  const $airTime = document.querySelector(`.episode-short>p`);
  console.log($airTime.textContent);
  console.log(typeof $airTime.textContent);

  // Question 5: select the first episode (the entire <li> element) from the episode-list..
  /*
        Solution: firstChild will always return the first node which is mostly an empty textnode. This is because of the whitespace (for example: an enter) in the code
        Therefore, it is recommended to use firstElementChild. This will always return the first HTML element

        FYI: using querySelector will also select only the first element from the list --> document.querySelector(`.episode-item`)
        It is not recommended to use this approach. The wrong element will get selected if you used this classname earlier in your document,
    */
  const $first = document.querySelector(`.episode-list`).firstChild;
  console.log($first);
  const $firstElement =
    document.querySelector(`.episode-list`).firstElementChild;
  console.log($firstElement);

  // Question 6: select the penultimate episode (the entire <li> element) from the episode-list
  /*
        Solution: lastElementChild will select the last element, using previousElementSibling returns one element in the list
        Notice again that lastElementChild and previousElementSibling ensures that we select an HTML element and never an empty textnode
    */
  const $secondLast =
    document.querySelector(`.episode-list`).lastElementChild
      .previousElementSibling;
  console.log($secondLast);

  // Question 7: select the first episode from the list again and request the content of this element using textContent and innerHTML
  // compare the output and request the type of the output
  /*
        Solution: textContent onlys shows the text without the HTML tags. The type is string.
        innerHTML also shows the HTML tags, although it is plain text. The type is also string.
    */
  const $episode = document.querySelector(`.episode-list`).firstElementChild;
  console.log($episode.textContent);
  console.log(typeof $episode.textContent);
  console.log($episode.innerHTML);
  console.log(typeof $episode.innerHTML);

  // Question 8: reuse the element with the class subtitle and request the textContent and innerHTML. What do you notice?
  /*
        Solution: there is no difference because the subtitle does not contain any nested HTML tags
    */
  console.log($subtitle.textContent);
  console.log($subtitle.innerHTML);
};

init();
