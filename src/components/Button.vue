<script lang="ts" setup>
import { SIZE, VARIANT } from '@/constants';

export interface Props {
  variant?: (typeof VARIANT)[keyof typeof VARIANT];
  size?: (typeof SIZE)[keyof typeof SIZE];
}

const props = withDefaults(defineProps<Props>(), {
  variant: VARIANT.SOLID,
  size: SIZE.MEDIUM,
});

const { size } = props;

const px = {
  [SIZE.LARGE]: 'px-6',
  [SIZE.MEDIUM]: 'px-4',
  [SIZE.SMALL]: 'px-3',
  [SIZE.EXTRA_SMALL]: 'px-2',
};

const height = {
  [SIZE.LARGE]: 'h-12',
  [SIZE.MEDIUM]: 'h-10',
  [SIZE.SMALL]: 'h-8',
  [SIZE.EXTRA_SMALL]: 'h-6',
};

const fontSize = {
  [SIZE.LARGE]: 'text-lg',
  [SIZE.MEDIUM]: 'text-base',
  [SIZE.SMALL]: 'text-sm',
  [SIZE.EXTRA_SMALL]: 'text-xs',
};

const gap = size === SIZE.SMALL ? 'gap-[6px]' : 'gap-2';

const classes = computed(() => [gap, px[size], height[size], fontSize[size]]);
</script>

<template>
  <button
    :class="['inline-flex items-center rounded-md bg-blue-500 font-semibold text-white', classes]"
  >
    <slot />
  </button>
  <span class="gap hidden"></span>
</template>
