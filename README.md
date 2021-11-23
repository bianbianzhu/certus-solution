### HOW TO USE THIS WEB APP

1. Go to project repo folder:

```
cd certus-solution
```

2. Install packages:

```
npm i
```

As a result of the above command, the following libs will be installed.

#### libs to install - frontend

- axios
- redux
- react-redux
- react-router-dom
- redux-devtools-extension
- redux-thunk
- react-icons
- styled-components
- node-sass (dev)

#### libs to install - proxy

- json-server

3. Open 2 terminals:

In the 1st one (For react-app frontend):

```
npm start
```

## ! ! ! TroubleShooting ! ! !

If you encouter error: Node Sass version X.X.X is incompatible with ^X.X.X || ^X.X.X, please
uninstall node-sass and install sass

```
npm uninstall node-sass
npm i sass --save-dev
```

In the 2nd one (For json-server as backend):

```
npm run json-server
```

=================================

### Main Features

1. Display all records with pagination.

   ![pagniation](./src/assets/images/pagination.png?raw=true)

2. Sort data column (number, date, text) in an ascending or descending order.

   ![sort_ascending](./src/assets/images/sort_ascending.png)

   ![sort_descending](src/assets/images/sort_descending.png?raw=true)

3. Filter data.

   ![filter_data](src/assets/images/filter_data.png)

4. Search data.

   ![search_data](src/assets/images/search_data.png)

5. Active (selected) background color according to amount value.

   ![active_color](src/assets/images/active_color.png)

### Additional Features

1.  Placeholder loading animation

![loading](src/assets/images/loading.png)

2.  Expandable session card

![expandable_card](src/assets/images/expandable_card.png)

=========================================================

\*\*\*The backend of this project is simply faked using JSON Server.

### Data Structure

saved in mock/db.json

Example:

```
 {
      "_id": "7",
      "amount": 120.13,
      "date": "08/05/2021",
      "other_party": "07-May-2021",
      "particulars": "retail_dr",
      "analysis_code": "asm_tc",
      "reference": "07/05/2012",
      "serial_number": "0000000000",
      "branch": "06-058",
      "notes": "transation 1"
    }
```

The data schema is derived from the the values shown in the sketch design.

Without thinking twice, I directly put the these values in the db.json which caused some annoying issues in the development. For example, the dates (date, other_party, reference) are in three different formats, which should be transformed into one unified format and then converted to different formats in the frontend while displaying.
//TODO: unify date format

### APIs

The two APIs used in this project.
Axios was used for API calls.

GET ALL TRANSACTIONS DATA

```
http://localhost:3001/transaction
```

GET TRANSACTIONS using query/queries (example)

```
http://localhost:3001/transaction?amount=814.85&particulars=retail_cr
```

### Limitation of Json-server

As I cannot touch the backend's code, some of the expected features have not been accomplished, such as, range filter.

- "Get transactions whose amount is between 200 and 500"

Apparently, this can be achieved through frontend code only. We can get all transactions and loop through them and save the desired ones into a new array; However, what if we have millions of data records?

Personally, I think the better way is to make an api call like:

```
http://localhost:3001/transaction?minamount=200&maxamount=500
```

and the backend will have the logic to handle it.

========================================================

### SASS

Sass variables and mixins are used for global styling management.

Example of mixins for media query:

```
@mixin mq($key) {
  $size: map-get(
    $map: $breakpoints,
    $key: $key,
  );

  @media only screen and (max-width: $size) {
    @content;
  }
}
```

### Custom Hooks

- useDebounce: to get the last data in every 500ms and ignore any other input
- useUpdateEffect: to avoid invoking the callback of useEffect when 1st time rendering
- useWindowDimensions: to get viewport width/height for responsive design

### Why no redux

The project currently has only one page and, I assumed that the maximum number of passing props from parent to children should be 3-4; However, the number increased too fast than I expected.
//TODO: migrate to Redux

========================================================

### Responsive Layout

As no design has been provided, so I made it according to my taste :D

- 2k screen

![2k](src/assets/images/2k.png)

- 17inch wide screen

![17inch](src/assets/images/17inch.png)

- Desktop

![sketch_design](src/assets/images/Sketch_Design.png)

- Tablet

![tablet](src/assets/images/tablet.png)

- Mobile (IPhone 6/7/8)

![mobile](src/assets/images/mobile.png)
