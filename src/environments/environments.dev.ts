export const environment = {
  firebase: {
    apiKey: "AIzaSyAYJ4DwJA4CWaBJys_JvHyDrQAcE5wQUoE",
    authDomain: "quizboyinc.firebaseapp.com",
    projectId: "demo-quizboyinc",
    storageBucket: "quizboyinc.appspot.com",
    messagingSenderId: "580828636844",
    appId: "1:580828636844:web:4f9eaec498dcc2a5762109"
  },
  production: false,
  name: 'development',
  useEmulators: true
}

// Must have "demo-<projectId>"
// Firebase rules MUST be set to allow read/write
// To change to prod - remove {projectId: demo-, useEmulators: false}
