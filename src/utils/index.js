export const getStatusColor = (key) => {
  let color = {
    "not started": "#f0f1f2",
    active: "#acfab3",
    paused: "#fae3ac",
    completed: "#9daaf5",
    dropped: "#ff9c9c",
  };
  return color[key?.toLowerCase()];
};
