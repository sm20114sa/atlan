<template>
  <div class="assets-list">
    <v-app id="inspire">
      <v-sheet class="pa-4 primary lighten-2">
        <v-text-field
          v-model="search"
          label="Search asset"
          dark
          flat
          solo-inverted
          hide-details
          clearable
          clear-icon="mdi-close-circle-outline"
        ></v-text-field>
        <v-checkbox
          v-model="caseSensitive"
          dark
          hide-details
          label="Case sensitive search"
        ></v-checkbox>
      </v-sheet>

      <v-treeview :items="items" :search="search" :filter="filter" open-all></v-treeview>
    </v-app>
  </div>
</template>

<script>
/* eslint-disable quotes */
/* eslint-disable comma-dangle */

export default {
  name: "listAssets",
  props: {
    msg: String
  },
  data: () => ({
    items: [
      {
        id: 1,
        name: "Integration",
        children: [
          {
            id: 2,
            name: "Database 1",
            children: [
              {
                id: 5,
                name: "Schema 1",
                children: [
                  {
                    id: 11,
                    name: "Table 1",
                    children: [
                      { id: 31, name: "Column 1" },
                      { id: 32, name: "Column 2" },
                      { id: 33, name: "Column 3" },
                      { id: 34, name: "Column 4" }
                    ]
                  },
                  {
                    id: 12,
                    name: "Table 2",
                    children: [
                      { id: 35, name: "Column 5" },
                      { id: 36, name: "Column 6" }
                    ]
                  },
                  {
                    id: 13,
                    name: "View 1",
                    children: [{ id: 37, name: "Column 7" }]
                  }
                ]
              },
              {
                id: 6,
                name: "Schema 2",
                children: [
                  {
                    id: 14,
                    name: "Table 3",
                    children: [{ id: 38, name: "Column 8" }]
                  },
                  {
                    id: 15,
                    name: "Table 4",
                    children: [
                      { id: 39, name: "Column 9" },
                      { id: 40, name: "Column 10" },
                      { id: 41, name: "Column 11" }
                    ]
                  },
                  {
                    id: 16,
                    name: "View 2",
                    children: [
                      { id: 42, name: "Column 12" },
                      { id: 43, name: "Column 13" },
                      { id: 44, name: "Column 14" },
                      { id: 45, name: "Column 15" }
                    ]
                  },
                  {
                    id: 17,
                    name: "View 3",
                    children: [
                      { id: 46, name: "Column 16" },
                      { id: 47, name: "Column 17" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 3,
            name: "Database 2",
            children: [
              {
                id: 7,
                name: "Schema 3",
                children: [
                  {
                    id: 14,
                    name: "Table 3",
                    children: [
                      { id: 48, name: "Column 18" },
                      { id: 49, name: "Column 19" },
                      { id: 50, name: "Column 20" }
                    ]
                  },
                  {
                    id: 15,
                    name: "Table 4",
                    children: [{ id: 51, name: "Column 21" }]
                  },
                  {
                    id: 16,
                    name: "View 2",
                    children: [
                      { id: 52, name: "Column 22" },
                      { id: 53, name: "Column 23" }
                    ]
                  },
                  {
                    id: 17,
                    name: "View 3",
                    children: [
                      { id: 54, name: "Column 24" },
                      { id: 55, name: "Column 25" },
                      { id: 56, name: "Column 26" }
                    ]
                  }
                ]
              },
              {
                id: 8,
                name: "Schema 4",
                children: [
                  {
                    id: 18,
                    name: "Table 5",
                    children: [
                      { id: 57, name: "Column 27" },
                      { id: 58, name: "Column 28" }
                    ]
                  },
                  {
                    id: 19,
                    name: "Table 6",
                    children: [{ id: 59, name: "Column 29" }]
                  },
                  {
                    id: 20,
                    name: "View 4",
                    children: [
                      { id: 60, name: "Column 30" },
                      { id: 61, name: "Column 31" }
                    ]
                  },
                  {
                    id: 21,
                    name: "View 5",
                    children: [
                      { id: 62, name: "Column 32" },
                      { id: 63, name: "Column 33" }
                    ]
                  },
                  {
                    id: 22,
                    name: "View 6",
                    children: [
                      { id: 64, name: "Column 34" },
                      { id: 65, name: "Column 35" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 4,
            name: "Database 3",
            children: [
              {
                id: 9,
                name: "Schema 5",
                children: [
                  {
                    id: 23,
                    name: "Table 7",
                    children: [{ id: 66, name: "Column 36" }]
                  },
                  {
                    id: 24,
                    name: "View 7",
                    children: [
                      { id: 67, name: "Column 37" },
                      { id: 68, name: "Column 38" }
                    ]
                  },
                  {
                    id: 25,
                    name: "View 8",
                    children: [
                      { id: 69, name: "Column 39" },
                      { id: 70, name: "Column 40" },
                      { id: 71, name: "Column 41" }
                    ]
                  },
                  {
                    id: 26,
                    name: "View 9",
                    children: [{ id: 72, name: "Column 42" }]
                  }
                ]
              },
              {
                id: 10,
                name: "Schema 6",
                children: [
                  {
                    id: 27,
                    name: "Table 8",
                    children: [
                      { id: 73, name: "Column 43" },
                      { id: 74, name: "Column 44" }
                    ]
                  },
                  {
                    id: 28,
                    name: "Table 9",
                    children: [
                      { id: 75, name: "Column 45" },
                      { id: 76, name: "Column 46" },
                      { id: 77, name: "Column 47" }
                    ]
                  },
                  {
                    id: 29,
                    name: "Table 10",
                    children: [{ id: 78, name: "Column 48" }]
                  },
                  {
                    id: 30,
                    name: "View 10",
                    children: [
                      { id: 79, name: "Column 49" },
                      { id: 80, name: "Column 50" }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    open: [1, 2, 3, 4],
    search: null,
    caseSensitive: false
  }),

  computed: {
    filter() {
      return this.caseSensitive
        ? (item, search, textKey) => item[textKey].indexOf(search) > -1
        : undefined;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.v-treeview-node__label {
  text-align: left;
}

.assets-list {
  width: 500px;
  margin: 0 auto;
  text-align: center;
  max-height: 80vh;
}
.v-sheet {
  position: static;
  z-index: 1;
}
.v-treeview {
  max-height: calc(80vh - 170px);
  overflow-y: auto;
  position: absolute;
  top: 125px;
  width: 100%;
  border: 1px solid #f5f5f5;
}
</style>
