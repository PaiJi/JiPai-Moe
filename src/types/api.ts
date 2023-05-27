export type NewestPost = {
  name: string
  link: string
  date: string
  summary: string
}

export type LastFM = {
  recenttracks: {
    track: {
      artist: {
        mbid: string
        "#text": string
      }
      streamable: string
      image: {
        size: string
        "#text": string
      }[]
      mbid: string
      album: {
        mbid: string
        "#text": string
      }
      name: string
      url: string
      date: {
        uts: string
        "#text": string
      }
    }[]
    "@attr": {
      user: string
      totalPages: string
      page: string
      perPage: string
      total: string
    }
  }
}

export type Mastodon = {
  id: string
  created_at: string
  in_reply_to_id: string | null
  in_reply_to_account_id: string | null
  sensitive: boolean
  spoiler_text: string
  visibility: string
  language: string
  uri: string
  url: string
  replies_count: number
  reblogs_count: number
  favourites_count: number
  edited_at: string | null
  content: string
  reblog: object | null
  application: object | null
  account: {
    id: string
    username: string
    acct: string
    display_name: string
    locked: boolean
    bot: boolean
    discoverable: boolean
    group: boolean
    created_at: string
    note: string
    url: string
    avatar: string
    avatar_static: string
    header: string
    header_static: string
    followers_count: number
    following_count: number
    statuses_count: number
    last_status_at: string
    noindex: boolean
    emojis: any[]
    roles: any[]
    fields: {
      name: string
      value: string
      verified_at: string | null
    }[]
  }
  media_attachments: any[]
  mentions: any[]
  tags: any[]
  emojis: any[]
  card: object | null
  poll: object | null
}

export type AIO = {
  newestPost: NewestPost
  recentlyListen: RecentlyListen
  mastodon: Mastodon
}
