import {useDispatch, useSelector} from "react-redux";
import {Button, Steps} from "antd";
import {nextStep, prevStep} from "../../actions/ActionSteps";


export function CustomSteps({steps, onDoneClick}){
    const { Step } = Steps;
    const reducer = useSelector(state => state.steps);
    const dispatch = useDispatch();

    const next = () => {
        if (reducer.objects[reducer.current] != null){
            dispatch(nextStep());
        }
    };

    const prev = () => {
        dispatch(prevStep());
    };

    return (
        <>
            <Steps current={reducer.current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[reducer.current].content}</div>
            <div className="steps-action">
                {reducer.current > 0 && (
                    <Button  style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
                {reducer.current < steps.length - 1 && (
                    <Button disabled={reducer.objects[reducer.current] == null} type="primary" onClick={() => next()} style={{float:"right"}}>
                        Next
                    </Button>
                )}
                {reducer.current === steps.length - 1 && (
                    <Button type="primary" onClick={() =>
                        onDoneClick(reducer.objects)
                    } style={{float:"right"}}>
                        Done
                    </Button>
                )}
            </div>
        </>
    );

}
