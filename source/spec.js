define(function() {
  return {
    $plugins: ['wire/debug', 'wire/on', 'wire/dom', 'wire/dom/render', 'wire/connect', 'wire/aop', 'core/plugin/restore', 'cola'],
    specMainView: {
      render: {
        template: {
          module: "text!components/orderinfo/template.html"
        }
      },
      insert: {
        at: {
          $ref: 'slot'
        }
      }
    },
    actions: {
      create: "components/orderinfo/common/actions",
      properties: {
        specMainView: {
          $ref: 'specMainView'
        }
      }
    },
    header: {
      wire: {
        spec: "components/orderinfo/header/spec",
        provide: {
          specMainView: {
            $ref: 'specMainView'
          },
          actions: {
            $ref: 'actions'
          }
        }
      }
    },
    info: {
      wire: {
        spec: "components/orderinfo/info/spec",
        provide: {
          specMainView: {
            $ref: 'specMainView'
          },
          actions: {
            $ref: 'actions'
          }
        }
      }
    },
    persons: {
      wire: {
        spec: "components/orderinfo/persons/spec",
        provide: {
          specMainView: {
            $ref: 'specMainView'
          },
          actions: {
            $ref: 'actions'
          }
        }
      }
    },
    documents: {
      wire: {
        spec: "components/orderinfo/documents/spec",
        provide: {
          specMainView: {
            $ref: 'specMainView'
          },
          actions: {
            $ref: 'actions'
          }
        }
      }
    },
    contracts: {
      wire: {
        spec: "components/orderinfo/contracts/spec",
        provide: {
          specMainView: {
            $ref: 'specMainView'
          },
          actions: {
            $ref: 'actions'
          }
        }
      }
    },
    orderInfoPageController: {
      create: "components/orderinfo/controller",
      restore: {
        persistantHash: {
          $ref: 'orderInfoPageController.getPersistantHash'
        },
        restoreButton: {
          $ref: 'orderInfoRestoreLayer'
        }
      }
    }
  };
});
