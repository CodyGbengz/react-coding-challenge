# React Coding Challenge

Hi! Thanks so much for taking the time to work on this challenge, we deeply appreciate you taking the time :) 

Please clone this repo, upload your results in a new private repo, and give us (github users: `konradchilimoniuk`, `lvkleist`, `lukasklinser`) access when you're done.

---

To run server go to `server` folder and run
```
yarn start
```

Within the frontend app API can be accessed by `http://localhost:8082/api`

Get all items:
```
GET /api/items
```

Update item status:
```
PUT /api/items/:id
{
    "status": "done"
}
```

TASKS:

1. Show table with all the items
    - Image should be centered in rounded box (80x80px).
    - If there are no image - show some placeholder
    - Status should be shown in different colors 
2. Filter table by name (when text in search input changed) 
    - trigger filter with some delay (200ms)
3. Make name column clickable and sort items by name ASC/DESC
4. By Clicking on image open full view im modal
    - Close modal on press `Esc` button
    - Close modal on background click
5. Implement ability to change item status 
6. Show Spinner on loading data
7. Handle API errors - show error message


#### What we value
We don't care whether you're done in 2 hours or take 7 hours to complete the tasks below. Here's a brief overview of what we'd like to see in your submission →
Try to stick to what you'd want to see in "production-level code". This means structuring your code in a maintainable way and adopting coding conventions that we use. 

Specifically, we would advise that you:
1. use TypeScript
2. Use StyledComponents for styling
3. Split logic to smaller components
4. think of using React Context API
5. try to avoid using class component (use functional components with hooks instead)
6. avoid using ready libraries/solutions - we want to see your thinking
