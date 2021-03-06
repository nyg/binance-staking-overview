import Link from './lib/link'
import MenuItem from './lib/menu-item'
import eventBus from '../utils/event-bus'


export default function Menu() {
   return (
      <>
         <MenuItem><span onClick={() => eventBus.dispatch('menu.item.settings.clicked')}>Settings</span></MenuItem>
         <MenuItem><Link href="https://github.com/nyg/binance-staking-overview">Github</Link></MenuItem>
      </>
   )
}
