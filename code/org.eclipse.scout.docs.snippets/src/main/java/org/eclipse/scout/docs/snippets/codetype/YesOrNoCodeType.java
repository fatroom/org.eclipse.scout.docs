package org.eclipse.scout.docs.snippets.codetype;

import org.eclipse.scout.rt.platform.Order;
import org.eclipse.scout.rt.platform.text.TEXTS;
import org.eclipse.scout.rt.shared.services.common.code.AbstractCode;
import org.eclipse.scout.rt.shared.services.common.code.AbstractCodeType;

public class YesOrNoCodeType extends AbstractCodeType<Long, Boolean> {

  private static final long serialVersionUID = 1L;

  public static final Long ID = 10000L;

  @Override
  protected String getConfiguredText() {
    return TEXTS.get("text");
  }

  @Override
  public Long getId() {
    return ID;
  }

  @Order(10)
  public static class YesCode extends AbstractCode<Long> {

    private static final long serialVersionUID = 1L;
    public static final Long ID = 10010L;

    @Override
    protected String getConfiguredText() {
      return TEXTS.get("Yes");
    }

    @Override
    public Long getId() {
      return ID;
    }
  }

  @Order(20)
  public static class NoCode extends AbstractCode<Long> {

    private static final long serialVersionUID = 1L;
    public static final Long ID = 10020L;

    @Override
    protected String getConfiguredText() {
      return TEXTS.get("No");
    }

    @Override
    public Long getId() {
      return ID;
    }
  }

}
