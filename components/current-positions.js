import * as format from '../utils/format'


export default function CurrentPositions({ data }) {

   return (
      <div className="space-y-4">
         {data.balance.map(({ asset, totalUSD, total, spot, staking }) => (
            <div key={asset} className="border border-gray-800 rounded p-2">
               <div className="pb-1">
                  <span className="font-bold">{asset}</span> ${format.asDecimal(totalUSD)} (spot: {format.asDecimal(spot)}, staking: {format.asDecimal(staking?.balance)})
               </div>
               <div className="border-t border-gray-400 pt-1 pb-1">
                  {staking.positions.map(position => (
                     <div key={position.positionId}>
                        <span>{position.accrualDays} of {position.duration} days, </span>
                        <span>{format.asPercentage(position.apy)} on {format.asDecimal(position.amount)}, </span>
                        <span>ends on {format.asLongDate(new Date(position.deliverDate))}</span>
                     </div>
                  ))}
               </div>
               <div className="border-t border-gray-400 pt-1">
                  {staking.products.map(product => (
                     <div key={product.id}>
                        <span>{product.sellOut ? 'Sold out!' : 'Available'}, </span>
                        <span>{product.duration} days, {format.asPercentage(product.config.annualInterestRate)}, </span>
                        <span>user limit: {format.asDecimal(product.config.maxPurchaseAmountPerUser)}</span>
                     </div>
                  ))}
               </div>
            </div>
         ))}
      </div>
   )
}
