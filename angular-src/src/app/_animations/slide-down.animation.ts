// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

//beter slideDownLeftAnimation genoemd :D
export const slideDownAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideDownAnimation', [

        // end state styles for route container (host)
        state('*', style({
            // the view covers the whole screen with a semi tranparent background
            position: 'fixed',
            left: 0,
            right:0
        })),

        // route 'enter' transition
        transition(':enter', [

            // styles at start of transition
            style({
                // start with the content positioned off the top of the screen, 
                // -400% is required instead of -100% because the negative position adds to the width of the element
                position: 'fixed',
                top: '400px',

                // start with background opacity set to 0 (invisible)
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }),

            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the top position to 0 which slides the content into view
                left: 0,
                right:0
            }))
        ]),

        // route 'leave' transition
        transition(':leave', [
            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the left position to -400% which slides the content out of view
                left: '-400%',

                // transition the background opacity to 0 to fade it out
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }))
        ])
    ]);