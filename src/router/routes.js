const routes = [
  {
    path: "/",
    component: () => import("layouts/Layout.vue"),
    children: [
      {
        path: "/contact",
        component: () => import("pages/index/Contact.vue"),
      },
      {
        path: "/settings",
        component: () => import("pages/index/settings/"),
      },
    ],
  },
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        path: "dashboard",
        component: () => import("pages/admin/Dashboard.vue"),
      },
      {
        path: "dashboard2",
        component: () => import("pages/admin/Dashboard2.vue"),
      },
      {
        path: "mapMarker",
        component: () => import("pages/admin/MapMarker.vue"),
      },
      {
        path: "treeTable",
        component: () => import("pages/admin/TreeTable.vue"),
      },
      {
        path: "cards",
        component: () => import("pages/admin/Cards.vue"),
      },
      {
        path: "tables",
        component: () => import("pages/admin/Tables.vue"),
      },
      {
        path: "checkout",
        component: () => import("pages/admin/Checkout.vue"),
      },
      {
        path: "ecommerce",
        component: () => import("pages/ProductCatalogues.vue"),
      },
      {
        path: "pagination",
        component: () => import("pages/admin/Pagination.vue"),
      },
      {
        path: "charts",
        component: () => import("pages/admin/Charts.vue"),
      },
      {
        path: "calendar",
        component: () => import("pages/admin/Calendar.vue"),
      },
      {
        path: "directory",
        component: () => import("pages/admin/Directory.vue"),
      },
      {
        path: "footer",
        component: () => import("pages/admin/Footer.vue"),
      },
      {
        path: "cardHeader",
        component: () => import("pages/admin/CardHeader.vue"),
      },
      {
        path: "staffList",
        component: () => import("pages/admin/staff/StaffList.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
  {
    path: "/welcome",
    component: () => import("pages/Welcome.vue"),
  },
  {
    path: "/login",
    component: () => import("pages/Login-1.vue"),
  },
];

export default routes;
