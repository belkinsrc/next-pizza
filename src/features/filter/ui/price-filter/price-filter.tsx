import { Title } from '@components/shared/ui/title'
import { Input } from "@components/shared/lib/input"
import { Slider } from "@components/shared/lib/slider"

function PriceFilter() {
  return (
    <div className="pb-[30px] mb-[30px] border-b-[1px] border-[#F6F6F6]">
      <Title text="Цена от и до:" size="md" className="mb-[15px] text-[16px] font-bold" />
      <div className="flex gap-[15px] mb-4">
        <Input type="number" min={0} max={1000} placeholder="0" className="rounded-[10px] py-[10px] px-[15px]" />
        <Input type="number" min={0} max={1000} placeholder="1000" className="rounded-[10px] py-[10px] px-[15px]" />
      </div>
      <Slider />
    </div>
  )
}

export { PriceFilter }