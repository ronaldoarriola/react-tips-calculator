import type {Dispatch, SetStateAction} from "react";

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>
    tip: number
}

type TipOption = {
    id: string,
    value: number,
    label: string
}

const tipOptions : TipOption[] = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

export default function TipPercentageForm({setTip, tip}: TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>

            <form>
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex gap-2">
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input
                            id={tipOption.id}
                            type="radio"
                            name="tip"
                            value={tipOption.value}
                            onChange={(e) => setTip(Number(e.target.value))}
                            checked={tip === tipOption.value}
                        />
                    </div>
                ))}
                <div>

                </div>
            </form>
        </div>
    );
}