interface Show {
  title: string
  info: string
  image: string
}

type ShowWithId = Show & FirestoreId

interface FirestoreId {
  id: string
}
