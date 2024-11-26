import { Title } from '@components/shared/ui/title'
import { FilterCheckbox } from '@components/shared/ui'

const ingredients = ['Сырный соус', 'Моцарелла', 'Чеснок', 'Солённые огурчики', 'Солённые огурчики', 'Томаты']

function IngredientsFilter() {
  return (
    <div className="pb-[42px]">
      <Title text="Ингредиенты:" size="md" className="mb-[15px] text-[16px] font-bold" />
      <div className="flex flex-col gap-4">
        {ingredients.map((ingredient, i) => (
          <FilterCheckbox key={i} text={ingredient} value={ingredient} name="ingredient" />
        ))}
      </div>
    </div>
  )
}

export { IngredientsFilter }