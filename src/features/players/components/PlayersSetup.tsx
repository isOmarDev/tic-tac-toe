import { useCallback, useMemo } from 'react';
import {
  Home,
  ArrowRight,
  ArrowLeft,
  Gamepad2,
} from 'lucide-react';
import {
  Stepper,
  Step,
  useStepper,
  StepButton,
} from '@/components/navigation/stepper';
import { Transition } from '@/components/animation';
import { AddPlayerOne } from './AddPlayerOne';
import { AddPlayerTwo } from './AddPlayerTwo';
import { useDispatch } from '@/store';
import { exitGameSetup } from '@/store/globalSlices';
import { resetPlayersNames } from '../slices/playersSlice';
import { cn } from '@/utils';

export const PlayersSetup = () => {
  const { activeStep, prevStep, handlePrev, handleNext } =
    useStepper();

  const dispatch = useDispatch();

  const handleExitPlayersSetup = useCallback(() => {
    dispatch(exitGameSetup());
    dispatch(resetPlayersNames());
  }, [dispatch]);

  const steps = useMemo(
    () => [
      {
        prevStep: {
          name: 'Home',
          icon: <Home />,
          onClick: handleExitPlayersSetup,
        },
        nextStep: {
          name: 'Player 2',
          icon: <ArrowRight />,
        },
        content: <AddPlayerOne onNextStep={handleNext} />,
      },
      {
        prevStep: {
          name: 'Player 1',
          icon: <ArrowLeft />,
          onClick: handlePrev,
        },
        nextStep: {
          name: 'Play',
          icon: <Gamepad2 />,
          styles: 'bg-cyan-950 text-white',
        },
        content: <AddPlayerTwo />,
      },
    ],
    [handleExitPlayersSetup, handleNext, handlePrev],
  );

  return (
    <div className="relative w-[350px]">
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          const isInitialStep = activeStep === prevStep;
          const isNextStep = activeStep > prevStep;

          return (
            <Step key={index}>
              <Transition
                key={index}
                translateX={
                  isInitialStep || isNextStep ? -50 : 50
                }
                duration={500}
              >
                <PrevStepButton
                  icon={step.prevStep.icon}
                  onClick={step.prevStep.onClick}
                >
                  {step.prevStep.name}
                </PrevStepButton>

                {step.content}

                <NextStepButton
                  icon={step.nextStep.icon}
                  className={step.nextStep.styles}
                >
                  {step.nextStep.name}
                </NextStepButton>
              </Transition>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
};

type StepButtonProps = {
  icon: JSX.Element;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const commonStepButtonClasses = cn(
  'absolute',
  'h-[72px] w-[72px]',
  'rounded-full',
  'tracking-wide font-normal text-lg',
  'bg-white hover:w-[150px] hover:shadow-md',
);

const commonStepButtonTextclasses = cn(
  'absolute opacity-0',
  'group-hover:static group-hover:translate-x-0 group-hover:opacity-100',
  'transition-all',
);

const PrevStepButton = ({
  className,
  icon,
  onClick,
  children,
}: StepButtonProps) => {
  return (
    <StepButton
      className={cn(
        commonStepButtonClasses,
        'bottom-0 right-[calc(100%+10px)]',
        className,
      )}
      startIcon={icon}
      onClick={onClick}
    >
      <span
        className={cn(
          commonStepButtonTextclasses,
          'translate-x-20',
        )}
      >
        {children}
      </span>
    </StepButton>
  );
};

const NextStepButton = ({
  className,
  icon,
  children,
}: StepButtonProps) => {
  return (
    <StepButton
      className={cn(
        commonStepButtonClasses,
        'bottom-0 left-[calc(100%+10px)]',
        className,
      )}
      endIcon={icon}
      type="submit"
      form="add-player-form"
    >
      <span
        className={cn(
          commonStepButtonTextclasses,
          '-translate-x-20',
        )}
      >
        {children}
      </span>
    </StepButton>
  );
};
