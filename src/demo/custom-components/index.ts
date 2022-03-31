/**
 * This file is part of tinymins' project.
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 TINYMINS.
 */

import CustomComponentSample, { CustomComponentSampleColumnSchema } from './sample';

export type CustomColumnSchema =
  | CustomComponentSampleColumnSchema;

export const CustomComponents = {
  [CustomComponentSample.componentName]: CustomComponentSample,
};

export type { CustomComponentEvent } from './event';
