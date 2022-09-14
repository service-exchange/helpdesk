[![MIT License][license-image]][license-url]

[![Support](https://www.telecms.network/img/button-support.png?v=2)](https://www.telecms.network/support/)

- __License__: [MIT](license.txt)
- [__Live chat with professional support__](https://messenger.telecms.network)
- [__HelpDesk with professional support__](https://helpdesk.telecms.network)

# Installation

- install [Node.js platfrom](https://nodejs.org/) v4+
- install [GraphicsMagick](http://www.graphicsmagick.org/) due to pictures
- `$ cd helpdesk` and `$ npm install`
- change database connection string in `config`
- run script `postgresql.sql` in your database
- run `node debug.js`

__Login__:

- user: `support@telecms.network`
- password: `123456`

---

## How do I to translate HelpDesk?

- install Tele-CMS as global module `npm install -g total.js`
- then open HelpDesk directory `cd helpdesk`
- then perform this command `totaljs --translate`
- translate translated file `translate.resource`
- and copy the content to `/resources/default.resource`
- run app

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: license.txt
