<template>
    <label class="control control-checkbox">
        <span class="control-checkbox-txt">{{ title }}</span>
            <input type="checkbox" checked="checked" />
        <div class="control_indicator"></div>
    </label>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss">
.control {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 5px;
    cursor: pointer;
    font-size: 14px;
    padding-top: 1px;
}
.control-checkbox-txt {
    color: #1A232B;
    opacity: 0.6;   
}
.control input {
    position: absolute;
    z-index: -1;
    opacity: 0;
}
.control_indicator {
    position: absolute;
    top: 2px;
    left: 0;
    height: 20px;
    width: 20px;
    background: #ffffff;
    border: 1px solid #CCCCCC;
    border-radius: 3px;
}
.control:hover input ~ .control_indicator,
.control input:focus ~ .control_indicator {
    background: #ffffff;
}

.control input:checked ~ .control_indicator {
    background: #257BF4;
}
.control:hover input:not([disabled]):checked ~ .control_indicator,
.control input:checked:focus ~ .control_indicator {
    background: #257BF4;
}
.control input:disabled ~ .control_indicator {
    background: #e6e6e6;
    opacity: 0.6;
    pointer-events: none;
}
.control_indicator:after {
    box-sizing: unset;
    content: '';
    position: absolute;
    display: none;
}
.control input:checked ~ .control_indicator:after {
    display: block;
}
.control-checkbox .control_indicator:after {
    left: 7px;
    top: 3px;
    width: 3px;
    height: 8px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}
.control-checkbox input:disabled ~ .control_indicator:after {
    border-color: #ffffff;
}
.control-checkbox .control_indicator::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
    margin-left: -12px;
    margin-top: -12px;
    background: #257BF4;
    border-radius: 3rem;
    opacity: 0.4;
    z-index: 99999;
    transform: scale(0);
}
@keyframes s-ripple {
    0% {
        transform: scale(0);
    }
    20% {
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(1);
    }
}
@keyframes s-ripple-dup {
   0% {
       transform: scale(0);
    }
   30% {
        transform: scale(1);
    }
    60% {
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(1);
    }
}
.control-checkbox input + .control_indicator::before {
    animation: s-ripple 250ms ease-out;
}
.control-checkbox input:checked + .control_indicator::before {
    animation-name: s-ripple-dup;
}
</style>