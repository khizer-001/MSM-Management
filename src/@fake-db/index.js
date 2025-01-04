import mock from './mock'
import './auth/jwt'
import './apps/chat'
import './apps/email'
import './apps/invoice'
import './apps/userList'
import './apps/calendar'
import './apps/permissions'

mock.onAny().passThrough()
