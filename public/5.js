webpackJsonp([5],{

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(251)
}
var normalizeComponent = __webpack_require__(47)
/* script */
var __vue_script__ = __webpack_require__(253)
/* template */
var __vue_template__ = __webpack_require__(254)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/useradvert/view.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-934e6d4c", Component.options)
  } else {
    hotAPI.reload("data-v-934e6d4c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(47)
/* script */
var __vue_script__ = __webpack_require__(216)
/* template */
var __vue_template__ = __webpack_require__(217)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Table/Grid.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-92c5d39c", Component.options)
  } else {
    hotAPI.reload("data-v-92c5d39c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        userAdvert: {
            type: Boolean,
            default: false
        },
        toolbar: {
            type: Boolean,
            default: true
        },
        createName: String,
        onCreateName: String,
        onEditName: String,
        onDelete: String,
        data: Array,
        columns: Array
    },
    data: function data() {
        return {
            search: null,
            loading: false
        };
    },

    methods: {
        search_: function search_() {
            var vm = this;
            vm.onSearch(vm.search, vm);
        },

        onSearch: _.debounce(function (query, vm) {
            var vm = this;
            vm.loading = true;
            vm.$router.push({
                path: '' + vm.$route.path,
                query: { search: query }
            }, function () {
                vm.loading = false;
            }, function () {
                vm.loading = false;
            });
        }, 500),
        handleEdit: function handleEdit(index, row) {
            var vm = this;
            vm.$router.push({ name: vm.onEditName, params: { id: row.id } });
        },
        handleDelete: function handleDelete(index, row) {
            var _this = this;

            var vm = this;
            vm.loading = true;
            vm.$confirm('This will permanently delete the file. Continue?', 'Warning', {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(function () {
                axios.delete((vm.onDelete ? vm.onDelete : '/api/agencies') + '/' + row.id);
                vm.$emit('delete', index);
                _this.$message({
                    type: 'success',
                    message: 'Delete completed'
                });
                vm.loading = false;
            }).catch(function () {
                _this.$message({
                    type: 'info',
                    message: 'Delete canceled'
                });
                vm.loading = false;
            });
        }
    }
});

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-row",
        [
          _vm.onCreateName
            ? _c(
                "el-col",
                { attrs: { span: 6 } },
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: {
                        click: function($event) {
                          _vm.$router.push({ name: _vm.onCreateName })
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.createName))]
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-table",
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.loading,
              expression: "loading"
            }
          ],
          staticStyle: { width: "100%" },
          attrs: { data: _vm.data }
        },
        [
          _vm._t("default"),
          _vm._v(" "),
          _vm._l(_vm.columns, function(column, index) {
            return _c("el-table-column", {
              key: index,
              attrs: { label: column.label, prop: column.prop }
            })
          }),
          _vm._v(" "),
          _vm.toolbar
            ? _c("el-table-column", {
                attrs: { align: "right" },
                scopedSlots: _vm._u([
                  {
                    key: "header",
                    fn: function(scope) {
                      return [
                        _c("el-input", {
                          attrs: {
                            size: "mini",
                            placeholder: "Type to search"
                          },
                          on: { input: _vm.search_ },
                          model: {
                            value: _vm.search,
                            callback: function($$v) {
                              _vm.search = $$v
                            },
                            expression: "search"
                          }
                        })
                      ]
                    }
                  },
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _vm.userAdvert
                          ? _c(
                              "el-button",
                              {
                                attrs: {
                                  slot: "button",
                                  type: "primary",
                                  size: "mini"
                                },
                                on: {
                                  click: function($event) {
                                    _vm.$router.push({
                                      name: "advert-user",
                                      params: { id: scope.row.id }
                                    })
                                  }
                                },
                                slot: "button"
                              },
                              [_vm._v("User Advert")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "el-button",
                          {
                            attrs: { size: "mini" },
                            on: {
                              click: function($event) {
                                _vm.handleEdit(scope.$index, scope.row)
                              }
                            }
                          },
                          [_vm._v("Edit\n                ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "el-button",
                          {
                            attrs: { size: "mini", type: "danger" },
                            on: {
                              click: function($event) {
                                _vm.handleDelete(scope.$index, scope.row)
                              }
                            }
                          },
                          [_vm._v("Delete\n                ")]
                        )
                      ]
                    }
                  }
                ])
              })
            : _vm._e()
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-92c5d39c", module.exports)
  }
}

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(252);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(78)("d51b9b06", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-934e6d4c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./view.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-934e6d4c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./view.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(77)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Table_Grid_vue__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Table_Grid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Table_Grid_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            columns: [{
                label: 'Tag',
                prop: 'tag.description'
            }, {
                label: 'User name',
                prop: 'user.name'
            }],
            data: []
        };
    },

    components: {
        GridView: __WEBPACK_IMPORTED_MODULE_0__Table_Grid_vue___default.a
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        axios.get('/api/useradverts', { params: to.query }).then(function (response) {
            next(function (vm) {
                return vm.setData(response.data);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var vm = this;
        axios.get('/api/useradverts', { params: to.query }).then(function (response) {
            vm.setData(response.data);
            next();
        });
    },

    methods: {
        setData: function setData(response) {
            this.data = response;
        }
    }
});

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "grid-view",
        {
          attrs: {
            columns: _vm.columns,
            data: _vm.data,
            "on-delete": "/api/useradverts",
            "on-edit-name": "edit-useradvert",
            toolbar: false
          },
          on: {
            delete: function($event) {
              _vm.data.splice($event, 1)
            }
          }
        },
        [
          _c("el-table-column", {
            attrs: { label: "Advert", prop: "tag" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return _vm._l(scope.row.tag.advertpublishers, function(
                    advertpublisher
                  ) {
                    return _c(
                      "span",
                      { staticStyle: { "margin-right": "3px" } },
                      [
                        _c("el-tag", { key: advertpublisher.id }, [
                          _vm._v(_vm._s(advertpublisher.details))
                        ])
                      ],
                      1
                    )
                  })
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-934e6d4c", module.exports)
  }
}

/***/ })

});